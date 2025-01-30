import ActivateLinkOnView from "@/core/components/ui/ActivateLinkOnView"
import ProjectCard from "./project-card"
import { getProjectsActions } from "@/core/actions"
import ProjectInfoProvider from "./project-info-provider"
import ProjectInfo from "./project-info"

export const dynamic = 'force-static'

async function Projects() {

  const { projects } = await getProjectsActions({ pinned: true }, 1, 10)

  return (
    <ProjectInfoProvider>
      <h2 className="sticky container text-5xl font-primary">My Projects</h2>

      <ActivateLinkOnView 
        className="container grid grid-cols-[1fr_400px] gap-6" 
        sectionId="projects"
      >
        <div className="flex flex-col gap-20">
          { projects.map(curr => <ProjectCard {...curr} key={curr.uuid} />) }
        </div>
        <ProjectInfo projects={projects}/>
      </ActivateLinkOnView>
    </ProjectInfoProvider>
  )
}

export default Projects