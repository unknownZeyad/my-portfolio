'use client'

import { TUnknownChildren } from '@/core/types'
import AnimationWrapper from './animation-wrapper'
import { fadeIn, skewBlurTween } from '../../animations'

export function SkewAndBlur({ children }: {
  children: TUnknownChildren
}) {

  return (
    <AnimationWrapper fromTo={skewBlurTween}>
      {children}
    </AnimationWrapper>
  )
}



export function FadeIn({ children }: {
  children: TUnknownChildren
}) {

  return (
    <AnimationWrapper fromTo={fadeIn}>
      {children}
    </AnimationWrapper>
  )
}
