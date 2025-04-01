"use client"

import { TChildren } from "@/core/types"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)
function RootTemplate({ children }: TChildren) {

  useGSAP(() => {
    gsap.timeline().fromTo(document.body,{
      backgroundColor: "#fff",
      color: "#000",
    },{
      backgroundColor: "#141414",
      color: "#fff",
      scrollTrigger: {
        scrub: 1,
        trigger: "#experiences",
        start: "300px bottom",  
        end: "500px bottom",
      },
    })
  },[])

  return children
}

export default RootTemplate