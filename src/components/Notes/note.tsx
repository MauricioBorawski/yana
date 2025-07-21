import {Editor} from "../Editor/editor";
import {Header} from "../Editor/header";

import type {Note as TNote} from "@/types";

import s from "./notes.module.css";

// eslint-disable-next-line no-empty-pattern
export const Note = ({title}: TNote) => {
    return (
        <div className={s["yana-editor"]}>
            <Header title={title}/>
            <Editor/>
        </div>
    );
};
