import { useState } from "react";
import { SidebarMenuItem } from "../ui/sidebar";
import { Input } from "../ui/input";
import { useNotesStore } from "@/store/notes";

export const NoteItem = ({
  id,
  children,
}: {
  id: string | undefined;
  children: React.ReactNode;
}) => {
  const { updateTitleNote } = useNotesStore();
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(children?.toString() || "");

  if (!children)
    return (
      <Input
        autoFocus
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onBlur={() => {
          setEdit(false);
          updateTitleNote(id, value);
        }}
      />
    );

  if (edit)
    return (
      <Input
        placeholder={children.toString()}
        autoFocus
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onBlur={() => {
          setEdit(false);
          updateTitleNote(id, value);
        }}
      />
    );

  return (
    <SidebarMenuItem
      onDoubleClick={() => {
        setEdit(true);
      }}
      className="cursor-pointer shadow-xs hover:bg-primary/90 hover:text-primary-foreground rounded-md px-3 py-2"
    >
      {children}
    </SidebarMenuItem>
  );
};
