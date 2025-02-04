import FadedText from '@/core/client/components/ui/FadedText'
import React from 'react'
import ActivateLinkOnView from '@/core/client/components/ui/ActivateLinkOnView'


const bio = `hello world my name is Zeyad Tamer ,I am a frontend web developer 
Based in egypt with a driver for excellence in building maintainable functional , responsive 
web apps, Proficient in the web latest technoloies, libraies and frameworks`

function Hero() {
  return (
    <ActivateLinkOnView 
      className='h-screen pt-[124px] container flex flex-col justify-center' 
      sectionId='hero'
    >
      <div className="flex items-center mb-8  ">
        <h1>
          <FadedText 
            className='hero_title' 
            text='a creative'
          />
          <FadedText 
            className='hero_title' 
            text='web developer'
          />
        </h1>
      </div>
      <p className='font-secondary w-[calc(100%/1.3)] capitalize text-xl'>{bio}</p>
    </ActivateLinkOnView>
  )
}

export default Hero