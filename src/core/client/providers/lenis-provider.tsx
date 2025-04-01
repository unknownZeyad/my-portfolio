import { ReactLenis } from 'lenis/react'
import { TChildren } from '../../types'

function LenisProvider({ children }: TChildren) {
  return (
    <ReactLenis root>
      { children }
    </ReactLenis>
  )
}

export default LenisProvider