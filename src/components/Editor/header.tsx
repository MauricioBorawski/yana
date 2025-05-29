import s from "./editor.module.css";

export const Header = () => (
  <h1
    contentEditable
    suppressContentEditableWarning
    autoFocus
    spellCheck={false}
    role="input"
    tabIndex={0}
    className={s["yana-editor-title"]}
  />
);
