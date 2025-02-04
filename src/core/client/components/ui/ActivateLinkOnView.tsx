"use client"

import { useNavigationLinksProvider } from "@/features/root/providers/navigation-links-provider"
import InViewSection from "./InViewSection"
import { ComponentProps } from "react"

type TActivateLinkOnViewProps = {
  sectionId: string,
} & Omit<ComponentProps<typeof InViewSection>,"id"|"onHitView">

function ActivateLinkOnView({ children, sectionId, ...props }: TActivateLinkOnViewProps) {

  const { activateLinkState } = useNavigationLinksProvider()

  function handleEnterView () {
    activateLinkState(sectionId)
  }

  return (
    <InViewSection 
      {...props} 
      id={sectionId} 
      onHitView={handleEnterView} 
    >
      { children }
    </InViewSection>
  )
}

export default ActivateLinkOnView