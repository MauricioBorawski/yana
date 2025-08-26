import { useNotesStore } from "@/store/notes";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";

export const DeleteModal = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string | undefined;
}) => {
  const deleteNote = useNotesStore().deleteNote;
  const findNote = useNotesStore().findNoteById;
  const note = findNote(id);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Note? {note && note.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this note?
        </DialogDescription>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              if (id) {
                deleteNote(id);
              }
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
