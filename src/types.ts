import { JSONContent } from "@tiptap/react";

export interface Note {
  id?: string;
  title?: string | null;
  content?: JSONContent | null;
}
