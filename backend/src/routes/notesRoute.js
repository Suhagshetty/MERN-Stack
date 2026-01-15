import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNotes,
} from "../controller/notesControl.js";
const router = express.Router();

router.get("/", getAllNotes);

// THIS IS A CONTROLLER NOW

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNote);

export default router;
