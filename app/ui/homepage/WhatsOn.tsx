import Image from 'next/image'
import React, { Fragment } from 'react'
import ShadyLogo from '../public/ShadyLogoWhite.png'
import { Button } from '@/components/ui/button';
import Event1 from '@/public/livemusic.png'
import Event2 from '@/public/trivia.png'
import Event3 from '@/public/event.png'
import Link from 'next/link'
import { fetchEvents } from '@/app/lib/data';
import { utapi } from "@/server/uploadthing";

// const events = [
//     {
//         title: "Happy Hour",
//         description: "20% on House Spirits",
//         days: "Wednesday and Sunday ",
//         image: Event3,
//     },
//     {
//         title: "Trivia Night",
//         description: "Trivia Night with Aemon",
//         days: "Wednesday at 5:30pm",
//         image: Event2,

//     },
//     {
//         title: "Live Music",
//         description: "with Aoife Taurus",
//         days: "Sunday 3pm-5pm",
//         image: Event1,

//     },
// ]

export default async function WhatsOn() {
    const events = await fetchEvents();
    // const oneUrl = await utapi.getFileUrls(
    //     "669dcf91-f16c-4496-8929-b68b1aae99d8-eb9svx.png",
    //   );
    const image =  await fetch('https://utfs.io/f/8848b1d9-69a6-41e3-b35c-4c57b3874435-gwg8u1.png');
    console.log(image)
    events.map((event) => {
    const eventImage = event.image;
    console.log(eventImage)
    })
    
  return (
    <div id="events" className='container w-full p-0'>
        <div className='flex flex-col'>
            <h1 className='p-8 md:p-16 text-6xl font-bold'>
                What's On
            </h1>

            <div className='container flex w-full flex-col justify-center'>
           {events.map((event, i) => {
           
            return(
            i%2===0 ? <Fragment key={i}>
<div className='flex flex-col sm:flex-row w-full md:justify-center pt-10 pb-10'>
                <div className='basis-1/2 flex w-full justify-center'>
                    <Image 
                        src={"https://utfs.io/f/"+event.image}
                        alt={""}
                        width={500}
                        height={500}
                    />
                </div>
                <div className='basis-1/2 flex w-full justify-end md:justify-center pt-6'>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-2xl '>
                            {event.title}
                        </h2>
                        <p className='pt-2'>
                            {event.description}
                        </p>
                        <p className='pt-2 pb-2'>
                            {event.time}
                        </p>
                        <Button variant="outline" className=''>
                            <Link href="/booking">
                                Book a table 
                             </Link>
                        </Button>
                    </div>
                </div>
                </div>
            </Fragment>
            : 
            <Fragment key={i}>
                <div className='flex sm:flex-row flex-col-reverse md:flex w-full justify-center'>
                <div className='basis-1/2 flex md:justify-center'>
                <div className='flex flex-col pt-6 justify-center'>
                        <h2 className='text-2xl'>
                            {event.title}
                        </h2>
                        <p className='pt-2'>
                            {event.description}
                        </p>
                        <p className='pt-2 pb-2'>
                            {event.time}
                        </p>
                        <Button variant="outline" className=''>
                            <Link href="/booking">
                                Book a table 
                             </Link>                        
                        </Button>
                    </div>
                </div>
                <div className='basis-1/2 flex w-full justify-center'>
                    <Image 
                        src={"https://utfs.io/f/"+event.image}
                        width={500}
                        height={500}
                        alt={""}
                    />
                </div>
                </div>
            </Fragment>
            )})}
            </div>
        </div>
    </div>
  )
}

