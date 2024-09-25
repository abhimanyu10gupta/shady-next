import { Separator } from '@/components/ui/separator'
import React from 'react'

import { menuItemsFood } from '@/constants'
import MenuItem from '@/app/ui/homepage/MenuItem'

const Menu = () => {
  return (
    <div className='w-screen'>
      <div className='flex flex-col mx-auto max-w-[980px] pt-48 md:pt-64 pb-20 p-2'>

        <div className=''>
          <h1 className='text-2xl'>
            Delicious Pub Food & Drinks
          </h1>
        </div>
      <div  className='pt-16 pb-16'>
        <h1 className='text-4xl'>
          Food Menu
        </h1>
      </div>
      <div>
      {menuItemsFood.map((item)=> (
        <MenuItem key={item.name} name={item.name} description={item.description} price={item.price}/>
      ))}
      </div>
      <Separator />

      </div>

    </div>
  )
}

export default Menu