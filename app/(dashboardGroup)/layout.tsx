
import { getMeProfile } from "@/services/getme";
import DashboardSidebar from "./_components/layout/DashboardSidebar";
import AdminDashboardSidebar from "./_components/layout/AdminDashBoardSidebar";


const DashBoardLayout = async({ children }: { children: React.ReactNode }) => {
  const user = await getMeProfile();

  return (
     <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
        {user?.data?.user?.role === "USER" &&  <DashboardSidebar />}
        {user?.data?.user?.role === "ADMIN" &&  <AdminDashboardSidebar/>}
    
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="min-h-[calc(100vh-3rem)] rounded-2xl bg-white p-6 shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;