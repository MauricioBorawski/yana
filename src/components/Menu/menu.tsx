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
import { Settings } from "../Settings/settings";
import { useNotesStore } from "@/store/notes";
import { useNavigate } from "react-router";
import { ItemsContainer } from "./items-container";

export const Menu = () => {
  const navigate = useNavigate();
  const createNote = useNotesStore(s => s.createNote);

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
                <ItemsContainer />
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => {
                      const id = Date.now().toString();

                      createNote({
                        id: id,
                        title: "",
                        content: [],
                      });

                      navigate(`/${id}`);
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
          <Settings />
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
};
