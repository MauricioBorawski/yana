import { useState } from "react";
import { Note } from "../Notes/notes";
import s from "./editor.module.css";

import type { TNote } from "../../types";

const emptyNote: TNote = {
  title: "",
  blocks: [
    {
      id: crypto.randomUUID(),
      content: "",
    },
  ],
};

export const Editor = () => {
  const [note, setNote] = useState<TNote>(emptyNote);

  const handleChangeTitle = (value: string) => {
    setNote((prevNote) => ({
      ...prevNote,
      title: value,
    }));
  };

  const handleChangeContent = (value: string) => {
    console.log(value);
  };

  return (
    <main className={s.container}>
      <Note noteType="title" handleChangeValue={handleChangeTitle}>
        {note.title}
      </Note>

      {note.blocks.map((block) => (
        <Note key={block.id} handleChangeValue={handleChangeContent}>
          {block.content}
        </Note>
      ))}
    </main>
  );
};
