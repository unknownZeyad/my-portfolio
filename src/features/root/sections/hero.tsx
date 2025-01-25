"use client"

import FadedText from '@/core/components/ui/FadedText'
import InViewSection from '@/core/components/ui/InViewSection'
import React from 'react'
import { useNavigationLinksProvider } from '../providers/navigation-links-provider'

function Hero() {

  const { activateLinkState } = useNavigationLinksProvider()
  
  function onHitView () {
    activateLinkState("hero")
  }

  return (
    <InViewSection id='hero' onHitView={onHitView}>
      <section className='h-screen pt-[124px]'>
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