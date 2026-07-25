import { getMeProfile } from "@/services/getme";
import NavBar from "../_components/NavBar";
import Footer from "../_components/Footer";
import HeroSection from "./_components/home/HeroSection";

const PublicLayout =async ({ children }: { children: React.ReactNode }) => {
    const user = await getMeProfile();

  return (
    <div className="min-h-full flex flex-col">
      <NavBar user={user} />
       <HeroSection/>
      <div className="max-w-400 px-4 w-full mx-auto mt-20 min-h-[calc(100vh-120px)] ">{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
