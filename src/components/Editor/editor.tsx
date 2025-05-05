import { useEditor, EditorContent } from "@tiptap/react";
import Paragraph from "@tiptap/extension-paragraph";
import StarterKit from "@tiptap/starter-kit";
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
    ],
    editorProps: {
      attributes: {
        class: clsx(s.editor),
      },
    },
  });

  return <EditorContent editor={editor} />;
};
