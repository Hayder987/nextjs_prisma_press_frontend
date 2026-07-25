"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, LogOut, Newspaper } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavbarProps } from "@/app/(authGroup)/_interface/getMeProfileInterface";
import { ISidebarItem } from "@/lib/types";
import { sidebarMenuItems } from "../../_config/sidebarMenuItems";
import { logout } from "@/services/logout";
import { toast } from "sonner";



export default function DashboardSidebar({user}: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  let menuItems : ISidebarItem[] = [];

  if(user?.data?.user?.role === "USER"){
    menuItems = sidebarMenuItems.USER
  }
  else if(user?.data?.user?.role === "AUTHOR"){
    menuItems = sidebarMenuItems.AUTHOR
  }
  else if(user?.data?.user?.role === "ADMIN"){
    menuItems = sidebarMenuItems.ADMIN
  }

  const handleLogout = async(action:string) =>{
    if (action === "logout") {
      await logout();
      toast.info("User Logout SuccessFully ");
      router.push("/login");
    }
  }


  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader className="border-b">
        <Link href="/" className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Newspaper className="h-5 w-5" />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">Prisma Press</span>
            <span className="text-xs text-muted-foreground">
              User Dashboard
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* Back Home */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home />
                    <span>Back Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Menu Items */}
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      // isActive={isActive}
                      className={cn(
                        "transition-colors",
                        isActive &&
                          "bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
            onClick={()=>{
              handleLogout("logout")
            }}
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
