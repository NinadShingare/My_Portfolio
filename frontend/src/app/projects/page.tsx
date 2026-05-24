import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Page header */}
      <div className="px-1">
        <span className="badge-brand mb-3 inline-flex">Portfolio</span>
        <h1 className="section-heading">Projects</h1>
        <p className="text-neutral-400 text-sm max-w-xl">
          A selection of things I've built — from backend services to full-stack applications.
        </p>
      </div>

      {/* Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className={`animate-fade-in-up animate-delay-${Math.min(i * 100, 400)}`}
          >
            <ProjectCard project={proj} />
          </div>
        ))}
      </section>
    </div>
  )
}
