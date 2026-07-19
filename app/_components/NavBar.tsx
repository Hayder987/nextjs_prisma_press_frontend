"use client"

import Link from "next/link"
import { Settings, LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Register", href: "/register" },
  { label: "DashBoard", href: "/dashboard" },
]

const NavBar = () => {
  
  const handleLogout = () => {
    // TODO:  logout logic here
  }

  return (
    <nav className="md:fixed z-50 w-full py-4 bg-blue-900 text-blue-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4">
        {/* logo */}
        <div>
          <h1 className="sm:text-xl font-bold">HDR PRESS</h1>
        </div>

        {/* menu items */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 font-semibold">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="hover:text-red-400 duration-150">{link.label}</li>
              </Link>
            ))}
          </ul>

          {/* profile logo + dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none rounded-full focus-visible:ring-2 focus-visible:ring-red-400">
              <Avatar className="h-9 w-9 border border-blue-200/40">
                <AvatarImage src="/diverse-profile-avatars.png" alt="Profile" />
                <AvatarFallback className="bg-blue-800 text-blue-100">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Name</DropdownMenuLabel>
              <DropdownMenuLabel>user@gmail.com</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings" className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
