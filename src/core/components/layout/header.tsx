import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='fixed top-0 left-0 w-full'>
      <div className="flex container items-center justify-between h-[80px]">
        <h1 className='font-primary text-2xl font-bold'>
          <Link href="/">Zeyad.</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header