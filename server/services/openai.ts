import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


interface NoteAIResponse {
  summary: string;
  tags: string[];
}

export async function getNoteSummaryAndTags(
  content: string
): Promise<NoteAIResponse> {
  const prompt = `
You are an intelligent assistant helping summarize and organize personal notes.

Given the following note content, return a short summary (1–2 sentences) and 3–5 lowercase tags that describe the main topics.

Return only JSON in this format:
{
  "summary": "...",
  "tags": ["...", "..."]
}

Note:
${content}
`;

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  const raw = chatResponse.choices[0].message.content || "";

  try {
    const parsed = JSON.parse(raw);
    return {
      summary: parsed.summary,
      tags: parsed.tags,
    };
  } catch (err) {
    console.error("❌ Failed to parse OpenAI response:", raw);
    throw new Error("OpenAI returned invalid JSON");
  }
}

export default openai;
