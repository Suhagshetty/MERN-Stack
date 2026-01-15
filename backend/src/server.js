import express from "express";
import notesRoute from "./routes/notesRoute.js";
const app = express();

app.use("/api/notes", notesRoute);

// /api/notes is now a prefix so we don't use it again and again

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
