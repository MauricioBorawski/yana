import s from "./editor.module.css";

export const Header = ({title}: {title?: string | null}) => (
  <h1
    contentEditable
    suppressContentEditableWarning
    autoFocus
    spellCheck={false}
    role="input"
    tabIndex={0}
    children={title}
    className={s["yana-editor-title"]}
  />
);
