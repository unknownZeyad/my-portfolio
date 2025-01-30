"use client"

import React, { createContext, Dispatch, ReactNode, useContext, useState } from 'react'

const ProjectInfoContext = createContext<{
  inViewProjectId: string | null,
  setInViewProjectId: Dispatch<string>,
}>({
  inViewProjectId: null,
  setInViewProjectId(){},
})

export function useProjectInfoProvider () {
  if (ProjectInfoContext === undefined)
    throw new Error("Cannot use useProjectInfoProvider outside ProjectInfoContext")
  return useContext(ProjectInfoContext)
}

function ProjectInfoProvider({ children }: {
  children: ReactNode
}) {

  const [inViewProjectId, setInViewProjectId] = useState<string|null>(null)

  return (
    <ProjectInfoContext.Provider
      value={{
        inViewProjectId,
        setInViewProjectId,
      }}
    > 
      { children }
    </ProjectInfoContext.Provider>
  )
}

export default ProjectInfoProvider