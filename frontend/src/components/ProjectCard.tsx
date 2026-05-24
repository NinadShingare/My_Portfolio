import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card flex h-full flex-col gap-5">
      <div className="space-y-3">
        <p className="eyebrow-label">Project</p>
        <h3 className="text-2xl font-extrabold text-neutral-900 leading-tight">
          {project.title}
        </h3>
        <p className="text-base text-neutral-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {String(project.techStack)
          .split(',')
          .map((tech) => tech.trim())
          .filter(Boolean)
          .map((tech) => (
            <span key={tech} className="badge-brand">
              {tech}
            </span>
          ))}
      </div>

      <div className="divider !my-0" />

      <div className="mt-auto flex flex-wrap items-center gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}
