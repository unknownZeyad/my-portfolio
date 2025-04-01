import { TChildren } from '@/core/types'
import Header from '@/features/root/layout/header'
import Footer from '@/features/root/layout/footer'

function MainLayout({ children }: TChildren) {
  return (
    <main className='[background-color:var(--root-bg-color)] [color:var(--root-txt-color)]'>
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default MainLayout