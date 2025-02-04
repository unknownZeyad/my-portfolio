import ActivateLinkOnView from "@/core/client/components/ui/ActivateLinkOnView"
import { getProjectsAction } from "@/core/server/actions"
import ProjectInfoProvider from "./project-info-provider"
import ProjectInfo from "./project-info"
import ProjectsList from "./project-list"

export const dynamic = 'force-static'

async function Projects() {

  const { projects } = await getProjectsAction({ pinned: true }, 1, 10)

  return (
    <ProjectInfoProvider>
      <ActivateLinkOnView 
        amount={.2}
        className="container grid grid-cols-[1fr_400px] gap-6" 
        sectionId="projects"
      >
        <ProjectsList projects={projects}/>
        <ProjectInfo projects={projects}/>
      </ActivateLinkOnView>
    </ProjectInfoProvider>
  )
}

export default Projects