import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
      <div className="mt-6">
      <h2 className="text-3xl font-extrabold mb-4 mx-4">Projects</h2>
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
    </section>
    </div>
  )
}
