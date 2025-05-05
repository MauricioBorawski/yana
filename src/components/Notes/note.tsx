import { Editor } from "../Editor/editor";
import s from "./notes.module.css";

interface NoteProps {
  title?: string | null;
  content?: Array<string>;
}

// eslint-disable-next-line no-empty-pattern
export const Note = ({  }: NoteProps) => {
  return (
    <div className={s["yana-editor"]}>
      <h1
        contentEditable
        suppressContentEditableWarning
        autoFocus
        role="input"
        tabIndex={0}
        className={s["yana-editor-title"]}
      />
      <Editor />
    </div>
  );
};
