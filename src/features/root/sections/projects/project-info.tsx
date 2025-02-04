"use client"

import { IProject } from "@/core/server/models/project"
import { useProjectInfoProvider } from "./project-info-provider"
import { AnimatePresence, motion } from "framer-motion"
import ScrollToWrapper from "@/core/client/components/ui/ScrollToWrapper"


function ProjectInfo({ projects }: {
  projects: IProject[]
}) {

  const { inViewProjectId } = useProjectInfoProvider()
  const currProject = projects.find(curr => curr.uuid === inViewProjectId)

  return (
    <div className="sticky top-0 flex pb-10 justify-between flex-col pt-[200px] h-screen">
      <ul>
        {projects.map(({ name, uuid },idx) => (
          <li 
            key={uuid} 
            className={`${inViewProjectId === uuid ? "text-white" : "text-white/70"} duration-100 font-primary cursor-pointer`}
          >
            <ScrollToWrapper target={`#project-${uuid}`} className="space-x-3">
              <span>0{idx}.</span>
              <span>{name}</span>
            </ScrollToWrapper>
          </li>
        ))}
      </ul>

      <div>
        <div className="border-b border-white pb-2 mb-10 flex items-center justify-between">
          <p>View Project</p>
        </div>
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
  )
}

export default ProjectInfo