import { useEffect, useRef, useState } from "react";
import s from "./notes.module.css";
import clsx from "clsx";

type NoteType = "title" | "body";

type Tag = keyof Pick<React.JSX.IntrinsicElements, "p" | "h1">;

interface NoteProps {
  noteType?: NoteType;
  children?: React.ReactNode;
  handleChangeValue: (value: string) => void;
}

export const Note = ({
  noteType = "body",
  children,
  handleChangeValue,
}: NoteProps) => {
  const [touched, setTouched] = useState<boolean>(!!children);

  const ref = useRef<HTMLParagraphElement | null>(null);

  const TagOption: Record<NoteType, Tag> = {
    body: "p",
    title: "h1",
  };
  const Tag = TagOption[noteType];
  const defaultContent: Record<NoteType, string> = {
    body: "Write here...",
    title: "New note...",
  };

  const className = clsx(
    Tag === "h1" && s["note-title"],
    Tag === "p" && s["note-body"],
    !touched && !children && s["empty"]
  );

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (!touched) {
      e.currentTarget.innerText = "";
      setTouched(true);
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (ref.current) {
        ref.current.blur();
      }
    }
  };

  useEffect(() => {
    if (children) {
      if (ref.current) {
        ref.current.innerText = children as string;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      spellCheck
      className={className}
      onKeyDown={handleOnKeyDown}
      onInput={(e) => {
        handleChangeValue(e.currentTarget.innerText);
      }}
    >
      {!touched && !children && defaultContent[noteType]}
    </Tag>
  );
};
