import { GoogleGenAI } from "@google/genai";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

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
    const { message, history } = req.body;

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
          .slice(-10)
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

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    return res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini error:", error);

    return res.status(500).json({
      error: "Unable to generate response",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Saaya server running on port ${PORT}`);
});
