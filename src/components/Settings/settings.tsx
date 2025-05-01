import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { SettingsIcon } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

export const Settings = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <SettingsIcon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Settings
              </DialogTitle>
            </DialogHeader>
            <p>Hola</p>
          </DialogContent>
        </Dialog>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
