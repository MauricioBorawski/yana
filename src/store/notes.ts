import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Note } from "../types";

interface NoteStore {
  notes: Note[];
  hasNotes: () => boolean;
  createNote: (note: Note) => void;
  updateTitleNote: (id: Note["id"], title: Note["title"]) => void;
  updateContentNote: (id: Note["id"], content: Note["content"]) => void;
  findNoteById: (id: Note["id"]) => Note | null;
  deleteNote: (id: Note["id"]) => void;
}

export const useNotesStore = create<NoteStore>()(
  persist(
    (set, get) => ({
      notes: [],
      hasNotes: () => get().notes.length > 0,
      createNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
      updateTitleNote: (id, title) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, title } : note
          ),
        })),
      updateContentNote: (id, content) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, content } : note
          ),
        })),
      findNoteById: (id) => get().notes.find((note) => note.id === id) || null,
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: "notes-storage",
      partialize: (state) => ({
        notes: state.notes,
      }),
    }
  )
);
