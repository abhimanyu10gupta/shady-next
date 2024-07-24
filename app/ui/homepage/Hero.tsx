import React from 'react'
import Image from 'next/image'
import ShadyBanner from '@/public/ShadyBanner.png'
import ShadyLogoWhite from '@/public/ShadyLogoWhite.png'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import logowhite2 from '@/public/logowhite2.png'
import logowhite1 from '@/public/logowhite1.png'
import ShadyBanner2 from '@/public/ShadyBanner2.png'
import ShadyBanner3 from '@/public/ShadyBanner3.png'
import ShadyBanner4 from '@/public/ShadyBanner4.png'
import ShadyBanner5 from '@/public/ShadyBanner5.png'

const Hero = () => {
  return (
    <div className='w-screen h-[350px] md:h-[1000px] min-h-[740px] top-0 bg-heroImage backdrop-saturate-200

 bg-fixed bg-no-repeat bg-top pt-1 md:p-48 bg-100%'>
      <div className="z-0 mx-auto text-center mb-20 md:mb-20 lg:mb-[6.25rem]">
        <div className='flex md:pt-24 justify-evenly m-auto min-h-[650px]  
           z-10 bg-[#0D0C11] rounded-t-full mt-20 md:w-[600px] 
          h-[740px] md:mt-0 flex-col sm:h-[740px] '>
          <div className='flex pt-12 sm:pt-0 justify-center '>
            <Image 
                  src={logowhite1}
                  alt= "shady_logo"
                  width={260}
                  className=""
                  />
          </div>

          {/* <h1 className="text-6xl pt-12">
            Shady Palms
          </h1> */}

          <h1 className=" md:mb-6 text-9xl pt-12 ">
              BAR
          </h1>
          
          <p className="inline-block text-xl pt-6 ">
              The Village Local
            </p>
          <div className="pt-6 md:pt-12 pb-8 text-[#FBB117]">
          <Link href='/booking'>

          <Button variant={'outline'} className='border-[#FBB117] hover:bg-[#fde7b9]'>
            Book a Table
          </Button>
          </Link>

          </div>
          <div className='w-2/3 mx-auto pt-12'>
            <Separator />

          </div>

          <div className='pb-12 pt-4'>
            <p>
            427 Logan Road, Stones Corner QLD 4120
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero