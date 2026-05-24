import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="section-shell px-6 py-8 sm:px-10">
        <div className="max-w-3xl">
          <span className="badge-brand mb-3 inline-flex">Portfolio</span>
          <h1 className="section-heading">Selected projects with practical engineering value.</h1>
          <p className="text-base text-neutral-600">
            A focused set of work across backend systems and full-stack products, showing how I approach
            architecture, implementation, and delivery quality.
          </p>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
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
