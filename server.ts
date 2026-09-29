import { GoogleGenAI, ThinkingLevel } from "@google/genai";
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

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY in .env");
}

const ai = new GoogleGenAI({
  apiKey,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history, fastReplyMode = true } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const validHistory = Array.isArray(history)
      ? history
          .filter(
            (turn) =>
              turn &&
              (turn.role === "user" || turn.role === "model") &&
              typeof turn.text === "string",
          )
          .slice(-6)
      : [];

    const contents = [
      ...validHistory.map((turn) => ({
        role: turn.role as "user" | "model",
        parts: [{ text: turn.text as string }],
      })),
      {
        role: "user" as const,
        parts: [{ text: message }],
      },
    ];

    const systemInstruction = `
${SAAYA_SYSTEM_INSTRUCTION}

CONTEXTUAL REASONING REQUIREMENT:

Do not treat the user's message as a keyword-triggered FAQ.

Before answering, understand the situation described by the user.

Identify internally:

1. WHO is experiencing the situation:
   - the user themselves
   - another woman/person
   - a friend/family member
   - a general/educational question

2. URGENCY:
   - immediate/current danger
   - concerning but not immediately dangerous
   - past experience
   - general information

3. USER'S INTENT:
   - practical safety guidance
   - emotional support
   - legal/rights information
   - preparation/education
   - helping another person

4. RESPONSE PRIORITY:
   - immediate safety first when relevant
   - practical next steps
   - legal information when specifically relevant
   - educational information when appropriate

Do not automatically assume that the user is the victim.

For example:

If the user says:
"My husband is hurting me and I am scared. What should I do?"

Understand that the user is describing their own situation and respond directly to their safety needs.

If the user says:
"On the road a person is beating his wife in front of people. How can I help that woman?"

Understand that the user is a bystander asking how to help another person. Do not respond as though the user is the victim.

If the user asks:
"What rights does a woman have if she faces domestic violence in India?"

Understand that this is primarily a legal-information question and provide relevant factual information rather than generic emergency instructions.

Do not force every answer into the same structure.

Use empathy naturally when someone describes fear, distress, or concern, but do not exaggerate emotions or make assumptions about what the user feels.

When the situation is not an immediate emergency, do not unnecessarily turn the response into an emergency response.

When the user asks for legal information, provide legal information clearly and distinguish general information from personalized legal advice.

When the user is describing violence happening to another person,
consistently treat the other person as the victim and the user as
the bystander/helper.

Do NOT address the user as though they are the victim.

For example, if the user says:
"One person in my home is being abused right now. What can I do?"

Use language such as:
- "The person's immediate safety is the priority."
- "If it is safe for you to do so, call 112."
- "Avoid physically confronting the abuser."
- "If you can safely help the person reach a safer place, do so."

Avoid language such as:
- "Your safety is at risk" unless referring to the user's own risk.
- "Move away from the abuser."
- "Leave the house."
- "Document your injuries."
- "You are not alone."

Do not switch between "you" and "the victim" as if they are the same person.
Maintain the identified roles throughout the entire response.

When immediate danger is genuinely present, prioritize practical safety actions and appropriate emergency support.

Keep responses practical, clear, and conversational.

RESPONSE STYLE:

Prefer short, useful responses over comprehensive explanations.

Answer the user's actual question first.

Only expand when the situation requires it or the user asks for more detail.

Do not repeat the user's question.

Do not repeat the same advice in different words.

Do not add unnecessary background information.

Do not turn a simple question into a long educational explanation.

${
  fastReplyMode
    ? `
FAST RESPONSE MODE:

Be concise.

For most questions, respond in no more than 120 words.

For urgent safety situations, respond in no more than 150 words unless additional information is genuinely necessary for immediate safety.

Use short bullets when giving actions.

Do not add:
- motivational speeches
- repeated reassurance
- long introductions
- unnecessary legal background
- information that does not directly help with the user's situation.

Start with the most important action.

The response should feel like a short, natural conversation with an AI assistant, not an article.

Safety-critical information should never be omitted just to meet the word limit.
`
    : ""
}
`;

    let response;

    try {
      console.log("Saaya: trying gemini-3.8-flash");

      response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents,
        config: {
          systemInstruction,
          maxOutputTokens: 512,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });

      console.log("Saaya: gemini-3.8-flash succeeded");
    } catch (error) {
      console.error("Saaya: gemini-3.8-flash failed", error);

      try {
        console.log("Saaya: trying gemini-3.1-flash-lite");

        response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents,
          config: {
            systemInstruction,
            maxOutputTokens: 512,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.MINIMAL,
            },
          },
        });

        console.log("Saaya: gemini-3.1-flash-lite succeeded");
      } catch (error) {
        console.error("Saaya: gemini-3.1-flash-lite failed", error);

        try {
          console.log("Saaya: trying gemini-2.5-flash");

          response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents,
            config: {
              systemInstruction,
              temperature: 0.25,
              maxOutputTokens: 512,
              thinkingConfig: {
                thinkingBudget: 0,
              },
            },
          });

          console.log("Saaya: gemini-2.5-flash succeeded");
        } catch (error) {
          console.error("Saaya: gemini-2.5-flash failed", error);
        }
      }
    }

    if (!response) {
      throw new Error("All Saaya AI models failed.");
    }

    console.log("Saaya finish reason:", response.candidates?.[0]?.finishReason);

    console.log("Saaya token count:", response.candidates?.[0]?.tokenCount);

    const rawReply = response.text?.trim();
    console.log("Saaya raw reply length:", rawReply?.length);
    console.log("Saaya raw reply:", rawReply);

    if (!rawReply) {
      throw new Error("Gemini returned an empty response.");
    }

    const { cleanReply, recommendedPages } = extractAndRecommendPages(
      rawReply,
      message,
    );

    return res.json({
      reply: cleanReply,
      recommendedPages,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    // Do not route failed Gemini requests through keyword-based SAFE-W answers.
    // The client will show a neutral connection error instead.
    return res.status(502).json({
      error: "Saaya AI is temporarily unavailable",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
