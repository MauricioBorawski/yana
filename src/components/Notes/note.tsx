import {Editor} from "../Editor/editor";
import {Header} from "../Editor/header";

import s from "./notes.module.css";

export const Note = () => {
    return (
        <div className={s["yana-editor"]}>
            <Header />
            <Editor/>
        </div>
    );
};
