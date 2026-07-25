import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const AUTHOR_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        title: "Dashboard",
        url: "/author-dashboard",
        icon: LayoutDashboard
    },
    {
        title: "My Posts",
        url: "/author-dashboard/my-posts",
        icon: FileText
    },
]