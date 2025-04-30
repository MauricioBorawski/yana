import s from "./theme-selector.module.css";

export const ThemeSelector = () => {
  return (
    <div className={s.container}>
      <select>
        <option id="theme-system">System</option>
        <option id="theme-light">Light</option>
        <option id="theme-dark">Dark</option>
      </select>
    </div>
  );
};
