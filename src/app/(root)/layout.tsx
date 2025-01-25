import { TChildren } from '@/core/types'
import Header from '@/features/root/layout/header'
import Footer from '@/features/root/layout/footer'
import NavigationLinksProvider from '@/features/root/providers/navigation-links-provider'

function MainLayout({ children }: TChildren) {
  return (
    <NavigationLinksProvider>
      <Header/>
      {children}
      <Footer/>
    </NavigationLinksProvider>
  )
}

export default MainLayout