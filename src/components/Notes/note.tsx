import { Editor } from "../Editor/editor";
import { Header } from "../Editor/header";
import s from "./notes.module.css";

interface NoteProps {
  id?: string;
  title?: string | null;
  content?: Array<string>;
}

// eslint-disable-next-line no-empty-pattern
export const Note = ({}: NoteProps) => {
  return (
    <div className={s["yana-editor"]}>
      <Header />
      <Editor />
    </div>
  );
};
