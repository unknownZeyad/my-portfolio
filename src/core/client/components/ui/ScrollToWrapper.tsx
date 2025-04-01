"use client"

import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { cloneElement, ComponentProps, JSXElementConstructor, MouseEvent, ReactElement, useCallback } from "react"

gsap.registerPlugin(ScrollToPlugin)

type TChild = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

type TScrollToWrapperProps<T extends TChild> = {
  target: string,
  duration?: number,
  children: ReactElement<ComponentProps<TChild>,TChild>,
} & ComponentProps<T>

function ScrollToWrapper<Element extends TChild>(
  { children, target, duration, ...props }: 
  TScrollToWrapperProps<Element>
) {
  
  const handleScroll = useCallback(() => {
    gsap.to(window, { 
      duration: duration || 1, 
      scrollTo: target,
      ease: "power4.out"
    });
  },[duration, target])

  return (
    cloneElement(children, {
      ...props,
      onClick: (e: MouseEvent<Element>) => {
        if(props?.onClick) props?.onClick(e)
        handleScroll()
      }
    })
  )
}

export default ScrollToWrapper