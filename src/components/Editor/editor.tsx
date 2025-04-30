import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import s from "./editor.module.css";

type EditorType = "title" | "body";

type Tag = keyof Pick<React.JSX.IntrinsicElements, "div" | "h1">;

interface EditorProps {
  editorType?: EditorType;
  children?: React.ReactNode;
  updateValue: (value: string) => void;
  createBlock?: () => void;
}

export const Editor = ({
  editorType = "body",
  children,
  updateValue,
  createBlock,
}: EditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const TagOption: Record<EditorType, Tag> = {
    body: "div",
    title: "h1",
  };
  const Tag = TagOption[editorType];

  const css = clsx([
    s.editor,
    editorType === "title" && s["editor-title"],
    editorType === "body" && s["editor-body"],
  ]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.textContent = children?.toString() || "";
    }
  }, [children]);

  return (
    <Tag
      id={editorType === "title" ? "editor-title" : "editor-body"}
      ref={editorRef}
      contentEditable
      suppressContentEditableWarning
      spellCheck
      className={css}
      onBlur={() => {
        if (editorRef.current) {
          const text = editorRef.current.textContent;

          updateValue(text || "");
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (createBlock) {
            createBlock();
          }
        }

        if (e.key === "Escape") {
          if (editorRef.current) {
            editorRef.current.blur();
          }
        }
      }}
    />
  );
};
