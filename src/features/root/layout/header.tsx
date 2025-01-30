"use client"

import Link from 'next/link'
import React from 'react'
import ScrollToWrapper from '@/core/components/ui/ScrollToWrapper'
import { useNavigationLinksProvider } from '../providers/navigation-links-provider'

function Header() {

  const { links } = useNavigationLinksProvider()

  return (
    <header className='fixed top-0 left-0 w-full backdrop-blur-md z-50'>
      <div className="flex container items-top pt-10 pb-4 justify-between">
        
        <h1 className='font-primary text-2xl font-bold h-fit'>
          <Link href="/">Zeyad.</Link>
        </h1>

        <nav className='flex flex-col -space-y-1'>
          {
            links.map(curr => (
              <ScrollToWrapper 
                key={curr.to}
                className={`font-primary cursor-pointer text-sm uppercase duration-100 ${curr.active ? "text-white" : "text-white/50"}`}
                target={`#${curr.to}`}
                duration={1}
              >
                {curr.name}
              </ScrollToWrapper>
            ))
          }
        </nav>
      </div>
    </header>
  )
}

export default Header
