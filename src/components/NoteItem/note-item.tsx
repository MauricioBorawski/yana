import {SidebarMenuItem} from "../ui/sidebar";
import {Link} from "react-router";

export const NoteItem = ({
                             id,
                             children,
                         }: {
    id: string | undefined;
    children: React.ReactNode;
}) => {
    return (
        <Link to={`/${id}`}>
            <SidebarMenuItem
                className="cursor-pointer shadow-xs hover:bg-primary/90 hover:text-primary-foreground rounded-md px-3 py-2"
            >
                {children || "New Note..."}
            </SidebarMenuItem>
        </Link>
    );
};
