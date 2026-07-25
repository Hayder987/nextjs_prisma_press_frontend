import { ISidebarItem } from "@/lib/types";
import { FileText, User } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS : ISidebarItem[] = [
     {
    title: "My Posts",
    url: "/admin-dashboard/my-post",
    icon: FileText,
  },
  {
    title: "My Profile",
    url: "/admin-dashboard/profile",
    icon: User,
  },
]