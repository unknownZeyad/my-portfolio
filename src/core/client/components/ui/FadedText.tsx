"use client"

import { motion } from "framer-motion"
import { ComponentProps } from "react"

type TFadedTextProps = {
  text: string,
  duration?: number
} & Omit<ComponentProps<'p'>,"children">

function FadedText({ duration, text, ...lineProps }: TFadedTextProps) {

  return (
    <div className="overflow-hidden relative">
      <p {...lineProps}>{text}</p>
      <motion.div 
        initial={{ left:"-25%" }}
        animate={{ left: "100%" }}
        transition={{ duration: duration || 3 }}
        className="h-full absolute top-0 left-0 z-10 -skew-x-[35deg] [background:linear-gradient(90deg,rgba(2,0,36,0)_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_100%)] w-[125%]"
      />
    </div>
  )
}

export default FadedText