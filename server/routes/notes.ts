import express, { Request, Response } from "express";
import supabase from "../services/supabase";
import { getNoteSummaryAndTags } from "../services/aiModel";

const router = express.Router();

router.post("/", async (req:Request, res:Response) => {

 const { title, content } = req.body;

  if (!content || typeof content !== "string") {
    res.status(400).json({ error: "Note content is required." });
    return;
  }
  try {
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


router.get("/", async (_req: Request, res: Response) => {
    try {
        const { data, error} = await supabase
        .from("notes")
        .select("*")
        .order("created_at", {ascending: false});

        if (error) {
            console.error("❌ Supabase fetch error:", error.message);
            return;
        }
        res.status(200).json(data)
    } catch (e) {
        console.error("Error retrieving notes,", e);
        res.status(500).json({ error: "Unexpected error while fetching notes." });
    }
})

router.get("/:id", async (req:Request, res:Response) => {
  const {id} = req.params;

  if (!id) {
    res.status(400).json({ error: "Note ID is required." });
    return;
  }

  try {
    const {data, error} = await supabase
    .from("notes")
    .select("*")
    .eq("id", id)
    .single();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching note by id", error);
    res.status(500).json(error)
  }
})

router.delete("/:id", async (req:Request, res:Response) => {
  const { id } = req.params;

  try {
    const {error} = await supabase
    .from("notes")
      .delete()
      .eq("id", id)

    if (error) {
      res.status(500).json({ error: "Failed to delete note." });
      return;
    }

    res.status(204).json({message: "Note deleted successfully"})

  } catch (error) {
    console.error("An unexpected error occurred", error);
    res.status(500).json({error:"Something went wrong"});
  }
})

router.patch("/:id", async (req:Request, res:Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!id) {
    res.status(400).json({ error: "Note ID is required." });
    return;
  }

  if (!title && !content) {
    res.status(400).json({ error: "Nothing to update." });
    return;
  }

  try {
    
    let updates: Record<string, any> = {};
    if (title) updates.title = title;

    // If content is updated, also regenerate summary + tags
    if (content) {
      updates.content = content;
      const { summary, tags } = await getNoteSummaryAndTags(content);
      updates.summary = summary;
      updates.tags = tags;
    }

    const {data, error} = await supabase
    .from("notes")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();

    if (error) {
      console.error("Supabase update error:", error.message);
      res.status(500).json({ error: "Failed to update note." });
      return;
    }
    res.status(200).json({message: "Note updated successfully"})
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
})

export default router;

