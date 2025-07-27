import { useEditor, EditorContent } from "@tiptap/react";
import { useNotesStore } from "@/store/notes";
import { useParams } from "react-router";
import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { clsx } from "clsx";
import s from "./editor.module.css";
import { useEffect } from "react";

const extensions = [StarterKit];

export const Editor = () => {
  const { id } = useParams();
  const updateNoteContent = useNotesStore().updateContentNote;
  const note = useNotesStore((state) =>
    state.notes.find((note) => note.id === id)
  );

  const editor = useEditor({
    content: note?.content,
    extensions: [
      ...extensions,
      Paragraph.configure({
        HTMLAttributes: {
          class: clsx(s["editor-body"]),
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc",
        },
      }),
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
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

  return <EditorContent editor={editor} />;
};
