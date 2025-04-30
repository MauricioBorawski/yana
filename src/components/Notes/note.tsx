import { useLayoutEffect, useState } from "react";
import { Editor } from "../Editor/editor";

import type { TNote } from "../../types";

interface NoteProps {
  title?: string | null;
  content?: Array<string>;
}

export const Note = ({ title, content }: NoteProps) => {
  const [note, setNote] = useState<TNote>(() => {
    return {
      title: title || "",
      blocks: [
        {
          id: "0",
          content: content ? content[0] : "",
        },
      ],
    };
  });

  const updateNoteTitle = (value: string) => {
    setNote((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const updateNoteContent = (value: string, id: string) => {
    setNote((prev) => {
      const blockToEdit = prev.blocks.find((block) => block.id === id);

      if (blockToEdit) {
        blockToEdit.content = value;

        return {
          ...prev,
          blocks: [...prev.blocks],
        };
      }

      return {
        ...prev,
      };
    });
  };

  const createNewBlock = () => {
    setNote((prev) => {
      return {
        ...prev,
        blocks: [
          ...prev.blocks,
          {
            id: prev.blocks.length.toString(),
            content: "",
          },
        ],
      };
    });
  };

  useLayoutEffect(() => {
    const blocks: NodeListOf<HTMLElement> =
      document.querySelectorAll("#editor-body");

    if (blocks.length > 1) {
      const lastElement = blocks[blocks.length - 1];

      lastElement.focus();
    }
  }, [note.blocks]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
      }}
    >
      <Editor editorType="title" updateValue={updateNoteTitle}>
        {note.title}
      </Editor>
      {note.blocks.map((block) => (
        <Editor
          key={block.id}
          updateValue={(value) => {
            updateNoteContent(value, block.id);
          }}
          createBlock={createNewBlock}
        >
          {block.content}
        </Editor>
      ))}
    </main>
  );
};
