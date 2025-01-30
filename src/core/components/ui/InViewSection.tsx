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
    amount: .7,
  })
  
  useEffect(() => {
    if (isInView) onHitView()
  },[isInView])

  return (
    <section ref={sectionRef} {...props}>
      { children }
    </section>
  )
}

export default InViewSection