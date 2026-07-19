import { getMeProfile } from "@/services/getme";
import NavBar from "../_components/NavBar";

const AuthLayout = async({ children }: { children: React.ReactNode }) => {
    const user = await getMeProfile();

  return (
    <div className="min-h-full flex flex-col">
      <NavBar user={user} />
      <div className="max-w-400 px-4 mx-auto w-full mt-20">{children}</div>
    </div>
  );
};

export default AuthLayout;