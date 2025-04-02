"use client"

import { animateHeaderOnScroll, animateThemeOnScroll } from '@/core/client/animations'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TChildren } from '@/core/types'

gsap.registerPlugin(ScrollTrigger)

function AnimationsWrapper({ children }: TChildren) {

  useGSAP(() => {
    animateThemeOnScroll()
    animateHeaderOnScroll()
  },[])

  return children
}

export default AnimationsWrapper