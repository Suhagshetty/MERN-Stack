import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("This is the home route");
});
app.get("/api/notes", (req, res) => {
  res.send("Welcome to Notes route");
});
app.get("/api/suhag", (req, res) => {
  res.status(200).send("This is the owners route");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
