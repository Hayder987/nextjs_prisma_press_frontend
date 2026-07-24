import { getMeProfile } from "@/services/getme";
import NavBar from "../_components/NavBar";
import Footer from "../_components/Footer";

const AuthLayout = async({ children }: { children: React.ReactNode }) => {
    const user = await getMeProfile();

  return (
    <div className="min-h-full flex flex-col">
      <NavBar user={user} />
      <div className="max-w-400 px-4 mx-auto w-full mt-20 min-h-[calc(100vh-120px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;