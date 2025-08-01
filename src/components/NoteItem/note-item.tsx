import { useState } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";
import clsx from "clsx";
import { SidebarMenuItem } from "../ui/sidebar";
import { DeleteModal } from "../Modals/delete-modal";

export const NoteItem = ({
  id,
  children,
}: {
  id: string | undefined;
  children: React.ReactNode;
}) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const buttonStyles = clsx([
    "size-5",
    "cursor-pointer",
    !showDeleteButton && "hidden",
  ]);

  return (
    <Link to={`/${id}`}>
      <SidebarMenuItem
        onMouseEnter={() => {
          setShowDeleteButton(true);
        }}
        onMouseLeave={() => {
          setShowDeleteButton(false);
        }}
        onBlur={() => {
          setShowDeleteButton(false);
        }}
        className="flex items-center justify-between cursor-pointer shadow-xs hover:bg-primary/90 hover:text-primary-foreground rounded-md px-3 py-2"
      >
        {children || "New Note..."}
        <DeleteModal id={id}>
          <div className={buttonStyles}>
            <X />
          </div>
        </DeleteModal>
      </SidebarMenuItem>
    </Link>
  );
};
