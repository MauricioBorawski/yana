import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router";
import { Note } from "./components/Notes/note";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Menu } from "./components/Menu/menu";
import { useNotesStore } from "@/store/notes.ts";
import { useEffect } from "react";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteGuard />} />

        <Route path="/:id" element={<NoteLayout />}>
          <Route index element={<Note />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NoteLayout = () => {
  return (
    <SidebarProvider>
      <Menu />
      <SidebarInset>
        <SidebarTrigger />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

const NoteGuard = () => {
  const hasNotes = useNotesStore().hasNotes;
  const createNote = useNotesStore().createNote;
  const notes = useNotesStore().notes;
  const lastNote = notes[notes.length - 1];

  const navigate = useNavigate();

  useEffect(() => {
    if (!hasNotes()) {
      const id = Date.now().toString();

      createNote({
        id: id,
        title: "",
        content: null,
      });

      navigate(`/${id}`);
    } else {
      navigate(`/${lastNote.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default App;
