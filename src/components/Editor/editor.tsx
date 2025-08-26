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
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import java from "highlight.js/lib/languages/java";
import { GripVertical } from "lucide-react";
import s from "./editor.module.css";

const CustomListItem = ListItem.extend({});

export const Editor = () => {
  const { id } = useParams();
  const updateNoteContent = useNotesStore().updateContentNote;
  const note = useNotesStore((state) =>
    state.notes.find((note) => note.id === id)
  );

  const lowlight = createLowlight(all);

  lowlight.register("html", html);
  lowlight.register("css", css);
  lowlight.register("js", js);
  lowlight.register("ts", ts);
  lowlight.register("java", java);

  const editor = useEditor({
    content: note?.content,
    extensions: [
      Document,
      Text,
      CodeBlock.configure({}),
      CodeBlockLowlight.configure({
        lowlight,
      }),
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
