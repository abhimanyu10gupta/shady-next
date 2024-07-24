import React from 'react'

const About = () => {
  return (
    <div className='container relative w-full p-16 flex flex-col md:flex-row'>
        <div className='basis-1/3 flex flex-col justify-center'>
          <h1 className='font-bold text-6xl p-2 flex'>   
              About    
          </h1>
          <p className='text-sm p-2 flex justify-start pr-10'>
            Your local Stocos Bar
          </p>
        </div>
            
        <div className='basis-2/3 text-md flex items-center md:pl-12'>
            <p>
            Shady Palms opens an atmospheric space for all to share from Wednesday through Sunday. 
            Home to a restaurant & a unique bar, Shady Palms shares an abundance of collective quirk, family manner, 
            local brews, four individual area’s to drink & dine, plus a novel function space, a boutique cider fridge that will leave you 
            pondering as well as Brisbane’s best trivia nights. But the true magic has to be self-crafted, eclectic and heart-warming menu. 
            Created with character, well sourced, local and unique ingredients.
            </p>
            
        </div>
    </div>

  )
}

export default About