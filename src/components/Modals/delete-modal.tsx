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
          <DialogTitle>Delete Note</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this note?
        </DialogDescription>
        {note && (
          <p className="text-sm text-muted-foreground font-semibold">
            {note.title || "Untitled Note"}
          </p>
        )}
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
