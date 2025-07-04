import express, { Request, Response } from "express";
import supabase from "../services/supabase.js";
import { getNoteSummaryAndTags } from "../services/openai.js";

const router = express.Router();

router.post("/", async (req:Request, res:Response) => {

 const { title, content } = req.body;

  if (!content || typeof content !== "string") {
    res.status(400).json({ error: "Note content is required." });
    return;
  }
  try {
    // 👉 Send to OpenAI
    const { summary, tags } = await getNoteSummaryAndTags(content);

    // 👉 Save to Supabase
    const { data, error } = await supabase
      .from("notes")
      .insert([{ title: title || null, content, summary, tags }])
      .select("*")
      .single();

    if (error) {
      console.error("❌ Supabase insert error:", error.message);
        res.status(500).json({ error: "Database insert failed." });
        return;
    }

    res.status(201).json(data);
  } catch (err) {
    console.error("❌ Error in /api/notes:", err);
    res.status(500).json({ error: "Failed to process note." });
  }
});

export default router;

