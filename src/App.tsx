import { Note } from "./components/Notes/note";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Menu } from "./components/Menu/menu";

import "./App.css";

function App() {
  return (
    <SidebarProvider>
      <Menu />
      <SidebarInset>
        <SidebarTrigger />
        <Note />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;
