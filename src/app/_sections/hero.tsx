"use client"

import FadedText from '@/core/components/ui/FadedText'
import InViewSection from '@/core/components/ui/InViewSection'
import React from 'react'

function Hero() {

  function onHitView () {
    console.log("wow , enterd hero section")
  }

  return (
    <InViewSection onHitView={onHitView}>
      <section className='h-screen pt-[80px]'>
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
      </section>
    </InViewSection>
  )
}

export default Hero