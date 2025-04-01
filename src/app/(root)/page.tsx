import About from '@/features/root/pages/home/about'
import ExperiencesList from '@/features/root/pages/home/experience'
import Hero from '@/features/root/pages/home/hero'
import React from 'react'

function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <ExperiencesList/>
      {/* <Projects/> */}
    </>
  )
}

export default Home