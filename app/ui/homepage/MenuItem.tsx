import React from 'react'
import { Separator } from '@/components/ui/separator'

const MenuItem = ({name, description, price}: MenuItemProps) => {
  return (
    <div className='w-full'>
        <Separator />
        <div className='flex p-4 justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-xl'>
                    {name}
                </h1>
                <p className='text-base'>
                    {description}
                </p>
            </div>
            <div>
                {price}
            </div>
        </div>
    </div>
  )
}

export default MenuItem