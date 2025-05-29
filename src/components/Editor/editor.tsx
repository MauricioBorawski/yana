import { useEditor, EditorContent } from "@tiptap/react";
import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { clsx } from "clsx";
import s from "./editor.module.css";

const extensions = [StarterKit];

export const Editor = () => {
  const editor = useEditor({
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
  });

  return <EditorContent editor={editor} />;
};
