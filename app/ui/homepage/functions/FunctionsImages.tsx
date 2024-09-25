import React from 'react'
import ShadyBanner2 from '@/public/ShadyBanner2.png'
import ShadyBanner3 from '@/public/ShadyBanner3.png'
import ShadyBanner4 from '@/public/ShadyBanner4.png'
import ShadyBanner5 from '@/public/ShadyBanner5.png'
import Image from 'next/image'

const FunctionsImages = () => {
  return (
    <div className='px-8 grid grid-rows-3 grid-flow-col gap-4 md:h-[1000px] overflow-y-hidden'>
        <div className='row-span-2'>
            <Image 
            src={ShadyBanner2}
            alt=""
            className='h-full rounded-lg'
            />
        </div>
        <div className='row-span-1'>
            <Image 
                src={ShadyBanner3}
                alt=""
                className='h-full rounded-lg'

                />
        </div>
        <div className='row-span-1'>
        <Image 
            src={ShadyBanner4}
            alt=""
            className='h-full rounded-lg'
            />
        </div>
        <div className='row-span-2'>
        <Image 
            src={ShadyBanner5}
            alt=""
            className='h-full rounded-lg'
            />
        </div>
    </div>
  )
}

export default FunctionsImages