import { getProjectAction } from '@/core/server/actions/projects'
import { redirect } from 'next/navigation'

async function ProjectPage({ params }: {
  params: Promise<{
    projectId: string
  }>
}) {
  const id = (await params).projectId
  const project = await getProjectAction(id)
  if (!project) redirect("/projects")

  return (
    <div></div>
    // <Project {...project}/>
  )
}

export default ProjectPage