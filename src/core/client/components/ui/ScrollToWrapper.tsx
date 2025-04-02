"use client"

import { TUnknownChildren } from "@/core/types"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { cloneElement, ComponentProps, MouseEvent, ReactElement, useCallback } from "react"

gsap.registerPlugin(ScrollToPlugin)


type TScrollToWrapperProps = {
  target: string,
  duration?: number,
  children: ReactElement<ComponentProps<TUnknownChildren>,TUnknownChildren>,
} 

function ScrollToWrapper({ children, target, duration }: TScrollToWrapperProps) {
  
  const handleScroll = useCallback(() => {
    gsap.to(window, { 
      duration: duration || 1, 
      scrollTo: target,
      ease: "power4.out"
    });
  },[duration, target])

  return (
    cloneElement(children, {
      onClick: () => {
        children.props?.onClick && children.props.onClick()
        handleScroll()
      } 
    })
  )
}

export default ScrollToWrapper