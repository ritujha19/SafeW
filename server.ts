import {
  GoogleGenAI,
  HarmBlockThreshold,
  HarmCategory,
  ThinkingLevel,
  type Content,
} from "@google/genai";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  SAAYA_SYSTEM_INSTRUCTION,
  extractAndRecommendPages,
} from "./constants/safewPages";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error("Missing GEMINI_API_KEY in .env");

const ai = new GoogleGenAI({ apiKey });

/* -------------------------------------------------------------------------- */
/* Config                                                                      */
/* -------------------------------------------------------------------------- */

// Set DEBUG_BLOCKS=true in .env to run the "which part is blocked?" probes.
const DEBUG_BLOCKS = process.env.DEBUG_BLOCKS === "true";

const MODELS = [
  {
    name: "gemini-3.8-flash",
    config: { thinkingConfig: { thinkingLevel: ThinkingLevel.LOW } },
  },
  {
    name: "gemini-3.1-flash-lite",
    config: { thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL } },
  },
  {
    name: "gemini-2.5-flash",
    config: { temperature: 0.25, thinkingConfig: { thinkingBudget: 0 } },
  },
];

// These only affect the 4 ADJUSTABLE categories. They do NOT affect
// PROHIBITED_CONTENT, which is a fixed filter you cannot turn off.
// A safety app talks about violence/harassment, so we loosen the adjustable ones.
const safetySettings = [
  HarmCategory.HARM_CATEGORY_HARASSMENT,
  HarmCategory.HARM_CATEGORY_HATE_SPEECH,
  HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
  HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
].map((category) => ({
  category,
  threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
}));

/* -------------------------------------------------------------------------- */
/* Prompts                                                                     */
/* -------------------------------------------------------------------------- */

// Shorter version of your old CONTEXTUAL REASONING block. Same rules (work out
// WHO is affected, how urgent it is, what the user wants) but without the long
// violent example sentences, which add "trigger" text to EVERY request.
function buildContextInstruction(fastReplyMode: boolean): string {
  return `
CONTEXT RULES:
- First work out who the situation is about: the user, another person (user is a helper/bystander), or a general question.
- Keep roles consistent. If the user is helping someone else, never address the user as the one at risk, and do not tell them to "leave the house" or "document your injuries". Focus on the other person's safety: call 112 if safe to do so, do not confront the aggressor, help the person reach a safer place if possible.
- If it is a legal-information question, give clear general legal information and say it is not personal legal advice.
- If it is not an emergency, do not answer as if it were one.
- Use empathy naturally, without exaggerating.
- Answer the actual question first. Do not repeat the question or the same advice.
${
  fastReplyMode
    ? `
FAST MODE: be concise. Usually under 120 words (under 150 for urgent safety). Use short bullets for actions. Start with the most important action. Never drop safety-critical information to save words.`
    : ""
}`;
}

// Minimal prompt used when the full one gets blocked. It keeps the persona and
// the safety rules, but has no statute lists, no child-related pages and no
// page-tag catalogue (extractAndRecommendPages already picks pages from the
// user's message, so the tags are optional).
const LEAN_SYSTEM_INSTRUCTION = `You are Saaya, a calm, caring safety and awareness assistant inside the SAFE-W app, which helps women and their allies stay safe.
- Answer the user's actual situation directly and practically.
- Put immediate physical safety first. Never encourage confronting someone dangerous.
- Use the idea: notice, move to a safe populated place, tell someone you trust.
- For emergencies in India: 112 (emergency), 181 (Women Helpline), 1091 (Women in Distress), 1930 (Cybercrime).
- If the user is helping another person, support them as a helper, not as the person at risk.
- You are an AI awareness companion, not a lawyer, doctor or emergency service.
- Be warm and brief.`;

// Wrapping the message gives the model context that this is someone asking for
// help. This is why adding "What should I do?" fixed your blocked message.
function frameMessage(message: string): string {
  return `A user of the SAFE-W women's safety app sent the message below. Reply as Saaya, giving helpful safety guidance.\n\nUser message: ${message}`;
}

// Shown only if every variant is blocked. It is the SAME text for every
// message (no keyword matching), so it never gives a wrong, situation-specific answer.
const BLOCKED_FALLBACK_REPLY =
  "I couldn't process that message, but I don't want to leave you without help. If you or someone else is in danger right now, call 112 (emergency) or 181 (Women Helpline), and move to a safe, populated place if you can. You can also try rewording your message and sending it again.";

/* -------------------------------------------------------------------------- */
/* Gemini helper                                                               */
/* -------------------------------------------------------------------------- */

type ModelDef = (typeof MODELS)[number];

async function callGemini(
  model: ModelDef,
  contents: Content[],
  systemInstruction: string | undefined,
  maxOutputTokens = 512,
) {
  const response = await ai.models.generateContent({
    model: model.name,
    contents,
    config: {
      ...model.config,
      systemInstruction,
      maxOutputTokens,
      safetySettings,
    },
  });

  return {
    response,
    text: response.text?.trim() || "",
    blockReason: response.promptFeedback?.blockReason,
  };
}

// Dev-only: find WHICH part of the request is blocked.
async function diagnoseBlock(
  message: string,
  contents: Content[],
  systemInstruction: string,
) {
  const lastUser: Content[] = [{ role: "user", parts: [{ text: message }] }];
  const probes: { label: string; contents: Content[]; system?: string }[] = [
    { label: "message only", contents: lastUser },
    { label: "system prompt only ('hi')", contents: [{ role: "user", parts: [{ text: "hi" }] }], system: systemInstruction },
    { label: "message + system (no history)", contents: lastUser, system: systemInstruction },
    { label: "history + message (no system)", contents },
    { label: "message + LEAN system", contents: lastUser, system: LEAN_SYSTEM_INSTRUCTION },
  ];

  for (const probe of probes) {
    try {
      const r = await callGemini(MODELS[0], probe.contents, probe.system, 16);
      console.log(`[block-probe] ${probe.label}:`, r.blockReason ?? "OK");
    } catch (error) {
      console.log(`[block-probe] ${probe.label}: error`, error);
    }
  }
}

/* -------------------------------------------------------------------------- */
/* Route                                                                       */
/* -------------------------------------------------------------------------- */

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, fastReplyMode = true } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const validHistory: Content[] = Array.isArray(history)
      ? history
          .filter(
            (turn) =>
              turn &&
              (turn.role === "user" || turn.role === "model") &&
              typeof turn.text === "string",
          )
          .slice(-6)
          .map((turn) => ({
            role: turn.role as "user" | "model",
            parts: [{ text: turn.text as string }],
          }))
      : [];

    const fullSystem = `${SAAYA_SYSTEM_INSTRUCTION}\n${buildContextInstruction(fastReplyMode)}`;
    const leanSystem = `${LEAN_SYSTEM_INSTRUCTION}\n${buildContextInstruction(fastReplyMode)}`;

    const plainUser: Content = { role: "user", parts: [{ text: message }] };
    const framedUser: Content = { role: "user", parts: [{ text: frameMessage(message) }] };

    // Each variant is a different PROMPT. Safety blocks depend on the prompt,
    // so changing the prompt (not just the model) is what gets us past them.
    const variants = [
      { label: "full prompt", system: fullSystem, contents: [...validHistory, plainUser] },
      { label: "lean prompt + history", system: leanSystem, contents: [...validHistory, framedUser] },
      { label: "lean prompt, no history", system: leanSystem, contents: [framedUser] },
    ];

    let rawReply = "";
    let wasBlocked = false;

    variantLoop: for (const variant of variants) {
      for (const model of MODELS) {
        try {
          console.log(`Saaya: ${model.name} / ${variant.label}`);
          const r = await callGemini(model, variant.contents, variant.system);

          if (r.blockReason) {
            // Blocks come from the prompt, so other models will block it too.
            // Skip to the next prompt variant instead of wasting 2 more calls.
            wasBlocked = true;
            console.warn("Saaya blocked:", {
              model: model.name,
              variant: variant.label,
              blockReason: r.blockReason,
            });
            break;
          }

          if (!r.text) {
            console.warn("Saaya empty reply:", {
              model: model.name,
              finishReason: r.response.candidates?.[0]?.finishReason,
            });
            continue; // model-specific problem, try the next model
          }

          rawReply = r.text;
          wasBlocked = false;
          break variantLoop;
        } catch (error) {
          // Network / 503 / quota: model-specific, try the next model.
          console.error(`Saaya: ${model.name} failed`, error);
        }
      }
    }

    if (!rawReply) {
      if (wasBlocked) {
        if (DEBUG_BLOCKS) await diagnoseBlock(message, variants[0].contents, fullSystem);
        // Safe, generic help instead of an error screen.
        return res.json({
          reply: BLOCKED_FALLBACK_REPLY,
          recommendedPages: [],
          degraded: true,
        });
      }
      throw new Error("All Saaya AI models failed.");
    }

    const { cleanReply, recommendedPages } = extractAndRecommendPages(rawReply, message);
    return res.json({ reply: cleanReply, recommendedPages });
  } catch (error) {
    console.error("Gemini error:", error);
    return res.status(502).json({ error: "Saaya AI is temporarily unavailable" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});