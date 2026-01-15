import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.get("/api/notes", (req, res) => {
  res.send("This is the notes route");
});

app.post("/api/suhag", (req, res) => {
  res
    .status(201)
    .json({ message: "Notes created using POST methods successfully" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Notes updated using PUT methods" });
});

app.delete("api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Notes deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
