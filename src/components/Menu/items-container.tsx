import { NoteItem } from "../NoteItem/note-item";
import { useNotesStore } from "@/store/notes";

export const ItemsContainer = () => {
  const notes = useNotesStore((state) => state.notes);
  console.log(notes);

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
