import FadedText from '@/core/components/ui/FadedText'
import React from 'react'
import ActivateLinkOnView from '@/core/components/ui/ActivateLinkOnView'

function Hero() {
  return (
    <ActivateLinkOnView className='h-screen pt-[124px]' sectionId='hero'>
      <div className="container flex items-center h-full">
        <div>
          <FadedText 
            className='hero_title' 
            text='a creative'
          />
          <FadedText 
            className='hero_title' 
            text='web developer'
          />
        </div>
      </div>
    </ActivateLinkOnView>
  )
}

export default Hero