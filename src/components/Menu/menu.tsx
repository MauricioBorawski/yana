import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarHeader,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {Settings} from "../Settings/settings";
import {useNotesStore} from "@/store/notes";
import {NoteItem} from "../NoteItem/note-item";
import {Link} from "react-router";

export const Menu = () => {
    const {notes, createNote} = useNotesStore();

    if (notes.length === 0) {
        createNote({
            id: Date.now().toString(),
            title: "",
            content: ["Hola Mundo"],
        });
    }

    return (
        <aside>
            <Sidebar>
                <SidebarHeader>
                    <p className="text-xl">Your Notes</p>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {
                                    notes.map((note) => (
                                        <Link to={`/${note.id}`}>
                                            <NoteItem id={note.id}>
                                                {note.title}
                                            </NoteItem>
                                        </Link>
                                    ))
                                }
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        onClick={() => {
                                            createNote({
                                                id: Date.now().toString(),
                                                title: "",
                                                content: ["Hola Mundo"],
                                            });
                                        }}
                                    >
                                        Create New Note
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <Settings/>
                </SidebarFooter>
            </Sidebar>
        </aside>
    );
};
