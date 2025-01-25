"use client"

import { TChildren } from '@/core/types'
import React, { createContext, useContext, useState } from 'react'

type TNavigationLink = {
  name: string,
  active: boolean,
  id: string,
  to: string
}

const navigationLinks:TNavigationLink[] = [
  {
    name:"Index",
    active: true,
    id: "hero",
    to: "hero"
  },
  {
    name:"Projects",
    active: false,
    id: "projects",
    to: "projects"  
  },
  {
    name:"Experience",
    active: false,
    id: "experience",
    to: "experience"  
  },
  {
    name:"Contact",
    active: false,
    id: "contact",
    to: "contact"  
  },
]

type TNavigationProviderValue = {
  links: TNavigationLink[],
  activateLinkState: (linkId: string) => void
}

const NavigationLinksContext = createContext<TNavigationProviderValue>({
  links: [],
  activateLinkState: () => {}
})

function NavigationLinksProvider({ children }: TChildren) {

  const [links, setLinks] = useState<TNavigationLink[]>(navigationLinks)

  function activateLinkState (linkId: TNavigationLink["id"]) {
    setLinks(prev => prev.map((curr) => ({
      ...curr,
      active: curr.id === linkId,
    })))
  }

  return (
    <NavigationLinksContext.Provider
      value={{
        links,
        activateLinkState
      }}
    >
      {children}
    </NavigationLinksContext.Provider>
  )
}

export default NavigationLinksProvider

export function useNavigationLinksProvider() {
  if (NavigationLinksContext === undefined)
    throw new Error("Cannot Use useNavigationLinksProvider outside NavigationLinksProvider Boundary")
  return useContext(NavigationLinksContext)
}