
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-right" richColors duration={3000}/>
        <NavBar/>
        <main className="max-w-400 mt-20 w-full min-h-[calc(100vh-120px)] mx-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
