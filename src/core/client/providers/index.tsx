"use client"

import React from 'react'
import LenisProvider from './lenis-provider'
import { TChildren } from '../../types'

function Providers({ children }: TChildren) {
  return (
    <LenisProvider>
      { children }
    </LenisProvider>
  )
}

export default Providers