import React from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'

const Map = () => {
    
  return (
    <div className='flex w-screen'>
    <GoogleMapsEmbed
      apiKey={process.env.GOOGLE_KEY as string}
      height={300}
      width="100%;"
      mode="place"
      q="place_id:ChIJuzLVNltakWsRZv9c9U6gqOw"
      style="filter: invert(90%) hue-rotate(180deg)"
    />
    </div>
  )
}

export default Map