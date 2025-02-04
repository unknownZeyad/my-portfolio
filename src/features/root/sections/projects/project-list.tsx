"use client"

import InViewSection from '@/core/client/components/ui/InViewSection'
import { IProject } from '@/core/server/models/project'
import { useProjectInfoProvider } from './project-info-provider'


function ProjectsList({ projects }: {
  projects: IProject[]
}) {
  const { setInViewProjectId } = useProjectInfoProvider()

  return (
    <div className="flex flex-col gap-20 h-max pt-[200px]">
      {projects.map(({ cover_image, uuid, name }) => (
        <InViewSection 
          key={uuid}
          amount={1}
          onHitView={() => setInViewProjectId(uuid)}
          id={`project-${uuid}`}
          className="w-full h-[500px] bg-red-300 project"
        >
          <img
            className='w-full h-full object-cover'
            src={cover_image} 
            alt={name + " project image"} 
          />
        </InViewSection>
      ))}
    </div>
  )
}

export default ProjectsList