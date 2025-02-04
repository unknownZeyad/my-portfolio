"use client"

import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ComponentProps } from "react"
gsap.registerPlugin(ScrollToPlugin)

type TScrollToWrapperProps = {
  target: string,
  duration?: number
} & ComponentProps<"div">

function ScrollToWrapper({ children, target, duration, ...props }: TScrollToWrapperProps) {

  function handleClick () {
    gsap.to(window, { 
      duration: duration || 1, 
      scrollTo: target,
      ease: "power4.out"
    });
  }

  return (
    <div 
      {...props}
      onClick={handleClick}
    >
      { children }
    </div>
  )
}

export default ScrollToWrapper