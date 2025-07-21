import { create } from "zustand";
import { Note } from "../types";

interface NoteStore {
  notes: Note[];
  createNote: (note: Note) => void;
  updateTitleNote: (id: Note["id"], title: Note["title"]) => void;
}

export const useNotesStore = create<NoteStore>()((set) => ({
  notes: [],
  createNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updateTitleNote: (id, title) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, title } : note
      ),
    })),
}));
