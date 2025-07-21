import s from "./editor.module.css";
import {useNotesStore} from "@/store/notes.ts";
import {useEffect, useRef} from "react";
import {useParams} from "react-router";

export const Header = () => {
    const {id} = useParams();
    const title = useNotesStore(state => (
        state.notes.find((x) => x.id === id)?.title ||  ""
    ));
    const updateTitleNote = useNotesStore().updateTitleNote;
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.innerText !== title) {
            ref.current.innerText = title || "";
        }
    }, [title]);

    return (
        <h1
            contentEditable
            suppressContentEditableWarning
            autoFocus
            spellCheck={false}
            role="input"
            tabIndex={0}
            className={s["yana-editor-title"]}
            ref={ref}
            onInput={(event) => {
                const content = event.currentTarget.innerText;

                updateTitleNote(id, content)
            }}
        />
    );
}
