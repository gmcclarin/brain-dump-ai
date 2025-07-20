import dotenv from "dotenv";
dotenv.config();

import express from "express";
import notesRoutes from "./routes/notes";

const app = express();

app.use(express.json());
app.use("/notes", notesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
