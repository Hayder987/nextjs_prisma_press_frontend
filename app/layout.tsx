
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import Footer from "./_components/Footer";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default async function RootLayout({
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
        <main className="w-full min-h-[calc(100vh-120px)] mx-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
