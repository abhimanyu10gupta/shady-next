import Image from 'next/image'
import React from 'react'
import ShadyLogo from '@/public/ShadyLogoWhite.png'
import Image1 from '@/public/image1.png'
import Image2 from '@/public/image2.png'
import Image3 from '@/public/image3.png'
import Image4 from '@/public/image4.png'
import Image5 from '@/public/image5.png'

const Images = () => {
  return (
    <div className='w-full '>
        <div className=' container w-full flex justify-center text-center font-bold text-5xl md:text-7xl p-8 pt-16 pb-16 md:p-24'>
        Come on down & Grab a Pint
        </div>

        <div className='flex flex-col md:flex-row h-screen md:h-[652px] w-screen overflow-hidden'>
            <div className='w-full h-1/2 md:w-1/2 md:h-full m-auto relative  overflow-hidden'>
            <Image 
                src={Image2}
                alt={""}
                fill
                className='hover:scale-105 transition duration-1000 ease-in-out '
                />
            </div>
            <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col '>
                    <div className='flex h-1/2'>
                    <div className='w-1/2 h-full relative m-1 overflow-hidden'>
                        <Image 
                            src={Image1}
                            alt={"im1"}
                            fill
                            objectFit="cover"
                            className='hover:scale-105 transition ease-in-out duration-1000'
                        />
                    </div>
                   <div className='w-1/2 h-full relative m-1 overflow-hidden'>
                        <Image 
                            src={Image3}
                            alt={"im3"}
                            layout="fill" objectFit="cover"
                            className='hover:scale-105 transition ease-in-out duration-1000'

                        />
                    </div>
                    </div>
                    <div className='flex h-1/2 m-1'>
                        
                    <div className='w-1/2 h-full relative m-1 overflow-hidden'>
                        <Image 
                            src={Image4}
                            alt={""}
                            layout="fill" objectFit="cover"
                            className='hover:scale-105 transition ease-in-out duration-1000'
                            />
                    </div>
                    <div className='w-1/2 h-full relative m-1 overflow-hidden'>
                        <Image 
                            src={Image5}
                            alt={""}
                            layout="fill" objectFit="cover"
                            className='hover:scale-105 transition ease-in-out duration-1000'

                        />
                    </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Images