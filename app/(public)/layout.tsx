

import "@/app/ui/global.css";
import Image from "next/image";
import ShadyBanner from '../../public/ShadyBanner.png'
import Footer from "@/app/ui/homepage/Footer";
import Navbar from "@/app/ui/homepage/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dark text-white">
      <Navbar />
      <div className='bg-[#0D0C11] text-white'>{children}</div>
      <Footer />
    </main>
  );
}
