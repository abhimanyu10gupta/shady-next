

import "@/app/ui/global.css";
import Image from "next/image";
import ShadyBanner from '../../public/ShadyBanner.png'
import Footer from "@/app/ui/homepage/Footer";
import Navbar from "@/app/ui/homepage/Navbar";
import { Satisfy, Lora } from "next/font/google"


const lora = Lora({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <main className={`${lora.className} dark text-white overscroll-contain`}>
      <Navbar />
      <div className='bg-[#0D0C11] text-white'>{children}</div>
      <Footer />
    </main>
  );
}
