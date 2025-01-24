"use client"

import { useInView } from "framer-motion"
import { ComponentProps, useEffect, useRef } from "react"

type TInViewSectionProps = {
  onHitView: () => void,
} & ComponentProps<"div">

function InViewSection({ onHitView, children, ...props }: TInViewSectionProps) {

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef,{
    margin: "0px",
    amount: .8,
  })
  
  useEffect(() => {
    if (isInView) onHitView()
  },[isInView])

  return (
    <div ref={sectionRef} {...props}>
      { children }
    </div>
  )
}

export default InViewSection