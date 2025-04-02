import About from '@/features/root/pages/home/about'
import Experiences from '@/features/root/pages/home/experience'
import Hero from '@/features/root/pages/home/hero'
import React from 'react'

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Experiences/>
      {/* <Projects/> */}
    </>
  )
}

export default Home