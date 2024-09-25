import ReserveTable from '@/app/ui/homepage/ReserveTable'
import FunctionsImages from '@/app/ui/homepage/functions/FunctionsImages'
import React from 'react'

const page = () => {
  return (
    <div className="w-screen">
        <div className='md:max-h-[1000px] grid grid-cols-2 gap-4'>

            <div className='flex flex-col justify-center align-middle'>
                <div className='flex justify-center'>
                    <h1 className='text-6xl text-center'>
                        Functions<br/> at <br/>Shady Palms

                    </h1>
                </div>

            </div>

            <FunctionsImages />
        </div>
        <ReserveTable />


    </div>
  )
}

export default page