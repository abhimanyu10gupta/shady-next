import Image from "next/image";
import Hero from "@/app/ui/homepage/Hero";
import About from "@/app/ui/homepage/About";
import WhatsOn from "@/app/ui/homepage/WhatsOn";
import ShadyBanner from '../../public/ShadyBanner.png'
import ShadyBanner2 from '../../public/ShadyBanner2.png'
import ShadyBanner3 from '../../public/ShadyBanner3.png'
import ShadyBanner4 from '../../public/ShadyBanner4.png'
import ShadyBanner5 from '../../public/ShadyBanner5.png'

import Images from "@/app/ui/homepage/Images";
import Footer from "@/app/ui/homepage/Footer";
import ReserveTable from "@/app/ui/homepage/ReserveTable";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <div className='top-0'>
        <Hero />
        <div className="">        
          <About />
          <Separator className="w-4/5 mx-auto"/>
          <WhatsOn />
          <Images />
          <ReserveTable />
        </div>
    </div>
  );
}
