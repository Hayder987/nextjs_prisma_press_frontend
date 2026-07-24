"use client";

import Link from "next/link";
import { Home, User, FileText, Newspaper } from "lucide-react";
import clsx from "clsx";
import SideBarMenu from "./SideBarMenu";

const sidebarMenus = [
  {
    title: "My Posts",
    href: "/admin-dashboard/my-post",
    icon: FileText,
  },
  {
    title: "My Profile",
    href: "/admin-dashboard/profile",
    icon: User,
  },
];

export default function AdminDashboardSidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-sky-100 bg-sky-50">
      {/* Logo */}
      <div className="border-b border-sky-100 px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <Newspaper size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Prisma Press</h2>
            <p className="text-sm text-slate-500">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* Back to home */}
      <div className="underline">
        <Link
          href={"/"}
          className={clsx(
            "group flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200",

            "text-slate-700 hover:bg-white hover:text-blue-600 hover:shadow",
          )}
        >
          <Home
            size={20}
            className={clsx("text-slate-500 group-hover:text-blue-600")}
          />

          <span className="text-blue-600">Back Home</span>
        </Link>
      </div>

      {/* side bar menu */}
      <SideBarMenu sidebarMenus={sidebarMenus} />

      {/* Logout */}
      <div className="border-t border-sky-100 p-5">
        <button className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-medium text-white transition hover:bg-red-600">
          Logout
        </button>
      </div>
    </aside>
  );
}
