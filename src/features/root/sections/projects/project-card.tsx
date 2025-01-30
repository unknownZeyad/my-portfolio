"use client"

import InViewSection from '@/core/components/ui/InViewSection'
import { IProject } from '@/core/models/project'
import { useProjectInfoProvider } from './project-info-provider'

function ProjectCard({ cover_image, name, uuid }: IProject) {

  const { setInViewProjectId } = useProjectInfoProvider()

  function handleEnterView () {
    setInViewProjectId(uuid)
  }

  return (
    <InViewSection 
      onHitView={handleEnterView}
      id={`project-${uuid}`}
      className="w-full h-[500px] bg-red-300"
    >
      <img 
        className='w-full h-full object-cover'
        src={cover_image} 
        alt={name + "project image"} 
      />
    </InViewSection>
  )
}

export default ProjectCard