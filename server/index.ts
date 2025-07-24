import express from "express";
import notesRoutes from "./routes/notes";
import testRoutes from "./routes/tests";
import cors from "cors"

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL })); 
app.use(express.json());
app.use("/notes", notesRoutes);
app.use("/test", testRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});