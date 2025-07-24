// services/openai.ts

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const headers = {
  Authorization: `Bearer ${process.env.HF_API_KEY}`,
  "Content-Type": "application/json",
};

export async function getNoteSummaryAndTags (content: string) {
    const prompt = `Summarize the following note and suggest 3-5 useful tags.\n\nNOTE:\n${content}\n\nRESPONSE:\nSummary:`;

    try {
      const response = await fetch(`${process.env.HF_API_URL}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 200,
          return_full_text: false,
          }
        })
      })

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`Hugging Face API error: ${err}`);
      }

      const data = await response.json();
      const text = data[0]?.generated_text || "";
      const summaryMatch = text.match(/Summary:\s*(.+?)\n/i);
    const tagsMatch = text.match(/Tags?:\s*(.+)/i);

    return {
      summary: summaryMatch ? summaryMatch[1].trim() : text.trim(),
      tags: tagsMatch
      ? tagsMatch[1].split(/[,|#]/).map((t: string) => t.trim()).filter(Boolean)
        : [],
    };

    } catch (err) {
        console.error("❌ Hugging Face error:", err);
    }
}