import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { getMeProfile } from "@/services/getme";
import DashboardSidebar from "./_components/layout/DashboardSidebar";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMeProfile();

  return (
    <SidebarProvider>
      <DashboardSidebar  user={user}/>

      <SidebarInset>
        <header className="flex h-16 items-center border-b bg-white px-5">
          <SidebarTrigger />
        </header>

        <main className="p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}