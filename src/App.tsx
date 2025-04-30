// import { Editor } from "./components/Editor/editor";
import { Note } from "./components/Notes/note";
import { ThemeSelector } from "./components/theme-selector/theme-selector";

import "./App.css";

function App() {
  return (
    <>
      <Note title="Hola" />
      <ThemeSelector />
    </>
  );
}

export default App;
