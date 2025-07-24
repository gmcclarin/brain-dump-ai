import express from "express";
import { getNoteSummaryAndTags } from "../services/aiModel";

const router = express.Router();

router.post("/test-summary", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400).json({ error: "Missing content" });
    return;
  }

  try {
    const result = await getNoteSummaryAndTags(content);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
