import { ISidebarItem } from "@/lib/types";
import { FileText, User } from "lucide-react";

export const USER_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    title: "My Posts",
    url: "/dashboard/my-post",
    icon: FileText,
  },
  {
    title: "My Profile",
    url: "/dashboard/profile",
    icon: User,
  },
];
