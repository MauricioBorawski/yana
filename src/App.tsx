import {BrowserRouter, Route, Routes, Outlet} from "react-router";
import {Note} from "./components/Notes/note";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {Menu} from "./components/Menu/menu";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <NoteLayout />
                }>
                    <Route path="/" element={<Note />} />
                    <Route path=":id" element={
                       <Note />
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

const NoteLayout = () => {
    return (
        <SidebarProvider>
            <Menu/>
            <SidebarInset>
                <SidebarTrigger/>
                <Outlet/>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default App;
