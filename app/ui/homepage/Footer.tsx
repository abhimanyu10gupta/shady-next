import React from 'react'
import Image from 'next/image'
import ShadyLogo  from '@/public/ShadyLogoWhite.png';
import { Separator } from '@/components/ui/separator';
// import Map from './Map';
import logowhite from '@/public/logowhite1.png'
import logowhite2 from '@/public/logowhite2.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id="footer" className='w-full bg-[#0D0C11]'>
      <div className='flex flex-col'>
      {/* <Map /> */}
        <div className='container basis-4/5 flex flex-col md:flex-row  justify-center'>
          <div className='flex flex-col basis-1/3 p-12'>
            <div className='flex w-1/2 pb-6'>
              <Image 
                src={logowhite}
                alt={""}
                height={180}
                width={180}
                className=""
              />
            </div>
              <p className=''>
                <Link href="/">
                What's On
                </Link>
              </p>
              <p>
              <Link href="/menu">

                Menu
              </Link>

              </p>
              <p>
              <Link href="/#footer">

                Contact
              </Link>

              </p>

              <p>
              <Link href="/booking">

                Reserve a Table
              </Link>

              </p>

          </div>
          <div className='md:hidden'>
          <Separator className='w-2/3 mx-auto' />
          </div> 
           <div className='hidden md:flex'>
          <Separator className='h-2/3 my-auto' orientation='vertical' />
          </div>  
          <div className='flex flex-col basis-1/3 p-12'>
            <h1 className='text-4xl '>
              Contact
            </h1>
            <div className="pt-12">
            <p>
            (07) 3324 2917
            </p>
            <p>
              shadypalmscafe@gmail.com
            </p>
            </div>
          </div>
          <div className='md:hidden'>
          <Separator className='w-2/3 mx-auto' />
          </div> 
           <div className='hidden md:flex'>
          <Separator className='h-2/3 my-auto' orientation='vertical' />
          </div>     
          <div className='flex flex-col basis-1/3 p-12 justify-between'>
            <h1 className='text-4xl'>
              Opening Hours
            </h1>
            <p className='pt-12'>
            Tuesday 1pm-9pm <br />

              Wednesday 11am-9:30pm<br />

              Thursday 11am-9:30pm<br />

              Friday 11am-11pm<br />

              Saturday 11am-11pm<br />

              Sunday 11am-8:30pm<br />
            </p>
            <h1>

            </h1>
          </div>

        </div>
        <Separator className='w-11/12 mx-auto' />
        <div className='flex justify-center basis-1/5 p-3'>
        © 2024 by Shady Palms. 
        </div>

      </div>
    </div>
  )
}

export default Footer