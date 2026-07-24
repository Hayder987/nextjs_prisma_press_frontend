"use client"

import { ISidebarMenu } from "@/lib/types";
import clsx from "clsx";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarMenu = ({sidebarMenus}: {sidebarMenus: ISidebarMenu[]}) => {
    const pathname = usePathname();
  return (
    <nav className="flex-1 px-5 py-6">
        <ul className="space-y-3">
          {sidebarMenus.map((menu) => {
            const Icon = menu.icon;
            const active = pathname === menu.href;

            return (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  className={clsx(
                    "group flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200",
                    active
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-700 hover:bg-white hover:text-blue-600 hover:shadow",
                  )}
                >
                  <Icon
                    size={20}
                    className={clsx(
                      active
                        ? "text-white"
                        : "text-slate-500 group-hover:text-blue-600",
                    )}
                  />

                  <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
  )
}


export default SideBarMenu