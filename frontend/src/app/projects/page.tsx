import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/api'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
    </section>
  )
}
