import { z } from "zod";

const blockSchema = z.object({
  id: z.string(),
  content: z.string(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noteSchema = z.object({
  title: z.string(),
  blocks: z.array(blockSchema),
});

export type TNote = z.infer<typeof noteSchema>;

export interface Note {
  id?: string;
  title?: string | null;
  content?: Array<string>;
}
