import { TChildren } from '@/core/types'
import Header from '../../features/root/layout/header'
import Footer from '../../features/root/layout/footer'
import AnimationsWrapper from '../../features/root/wrappers/animations-wrapper'

function MainLayout({ children }: TChildren) {
  return (
    <AnimationsWrapper>
      <Header/>
      {children}
      <Footer/>
    </AnimationsWrapper>
  )
}

export default MainLayout