import Link from 'next/link'
import React from 'react'
import ScrollToWrapper from '@/core/client/components/ui/ScrollToWrapper'

type TLink = {
  name: string,
  to: string
}

const links: TLink[] = [
  {
    name: "Index",
    to: "index"
  },
  {
    name: "About",
    to: "about"
  },
  {
    name: "Work",
    to: "work"
  },
  {
    name: "Experience",
    to: "experience"
  },
  {
    name: "Contact",
    to: "contact"
  },
]

function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <div className="flex container items-top py-8 justify-between">
        
        <h1 className='font-secondary text-3xl font-extrabold h-fit'>
          <Link href="/">Zeyad.</Link>
        </h1>

        <ul className='flex gap-8 items-center'>
          {
            links.map(curr => (
              <ScrollToWrapper 
                key={curr.to}
                className='header_link font-secondary font-semibold cursor-pointer capitalize duration-100'
                target={`#${curr.to}`}
                duration={1}
              >
                <li>{curr.name}</li>
              </ScrollToWrapper>
            ))
          }
        </ul>

      </div>
    </header>
  )
}

export default Header
