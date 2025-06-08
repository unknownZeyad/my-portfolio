"use client"

import { TUnknownChildren } from '@/core/types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cloneElement, ComponentProps, ReactElement, useRef } from 'react'

type AnimationWrapperProps = {
  children: ReactElement<TUnknownChildren, ComponentProps<TUnknownChildren>>,
  fromTo: {
    from: gsap.TweenVars,
    to: ((element: TUnknownChildren) => gsap.TweenVars) | gsap.TweenVars,
  },
}
function AnimationWrapper({ children, fromTo: { from, to } }: AnimationWrapperProps) {
  const ref = useRef<TUnknownChildren>(null)

  useGSAP(() => {
    const realTo = typeof to === "function" ? to(ref.current) : to
    gsap.fromTo(ref.current,from,realTo)
  },[])
  
  return cloneElement<TUnknownChildren>(children, { ref })
}

export default AnimationWrapper