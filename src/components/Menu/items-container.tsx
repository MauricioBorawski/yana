import { useNotesStore } from "@/store/notes";
import { NoteItem } from "../NoteItem/note-item";

export const ItemsContainer = () => {
  const notes = useNotesStore((state) => state.notes);

  return (
    <div>
      {notes.map((note) => (
        <NoteItem id={note.id} key={note.id}>
          {note.title}
        </NoteItem>
      ))}
    </div>
  );
};
