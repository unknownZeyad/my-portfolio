"use client"

import { IProject } from "@/core/models/project"
import { useProjectInfoProvider } from "./project-info-provider"
import ScrollToWrapper from "@/core/components/ui/ScrollToWrapper"
import { AnimatePresence, motion } from "framer-motion"

function ProjectInfo({ projects }: {
  projects: IProject[]
}) {

  const { inViewProjectId } = useProjectInfoProvider()
  const currProject = projects.find(curr => curr.uuid === inViewProjectId)

  return (
    <div className="flex pb-10 justify-between flex-col sticky top-[150px] h-[calc(100vh-150px)]">
      <ul>
        {projects.map(({ name, uuid },idx) => (
          <li 
            key={uuid} 
            className={`${inViewProjectId === uuid ? "text-white" : "text-white/70"} duration-100 font-primary cursor-pointer`}
          >
            <ScrollToWrapper className="space-x-1" target={`#project-${uuid}`}>
              <span>{idx}.</span>
              <span>{name}</span>
            </ScrollToWrapper>
          </li>
        ))}
      </ul>

      <div>
        <div className="border-b border-white pb-2 mb-10 flex items-center justify-between">
          <p>View Project</p>
        </div>
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={currProject?.uuid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-6xl font-primary"
            >
              {currProject?.name}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo