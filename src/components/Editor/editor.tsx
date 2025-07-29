import { useEffect } from "react";
import { useParams } from "react-router";
import { useEditor, EditorContent } from "@tiptap/react";
import { useNotesStore } from "@/store/notes";
import { clsx } from "clsx";
import { ListKeymap, ListItem, BulletList } from "@tiptap/extension-list";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import DragHandle from "@tiptap/extension-drag-handle-react";
import Paragraph from "@tiptap/extension-paragraph";
import { GripVertical } from "lucide-react";
import s from "./editor.module.css";

const CustomListItem = ListItem.extend({});

export const Editor = () => {
  const { id } = useParams();
  const updateNoteContent = useNotesStore().updateContentNote;
  const note = useNotesStore((state) =>
    state.notes.find((note) => note.id === id)
  );

  const editor = useEditor({
    content: note?.content,
    extensions: [
      Document,
      Text,
      Paragraph.configure({
        HTMLAttributes: {
          class: clsx(s["editor-body"]),
        },
      }),
      BulletList,
      CustomListItem.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      ListKeymap,
    ],
    editorProps: {
      attributes: {
        class: clsx(s.editor),
      },
    },
    onUpdate: (event) => {
      const content = event.editor.getJSON();
      updateNoteContent(id, content);
    },
  });

  useEffect(() => {
    if (editor && note) {
      editor.commands.setContent(note.content || {});
    }
  }, [editor, note]);

  return (
    <>
      <DragHandle
        editor={editor}
        computePositionConfig={{
          placement: "left",
        }}
      >
        <GripVertical className="size-4" />
      </DragHandle>
      <EditorContent editor={editor} />
    </>
  );
};
