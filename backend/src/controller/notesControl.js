export function getAllNotes(req, res) {
  res.status(200).send("You just fetched a note");
}
export function createNote(req, res) {
  res.status(200).json({ message: "Note created" });
}
export function updateNotes(req, res) {
  res.status(200).json({ message: "Note updated" });
}
export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted" });
}
