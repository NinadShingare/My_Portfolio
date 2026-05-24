import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card flex flex-col gap-4 animate-fade-in-up">
      {/* Title */}
      <h3 className="text-lg font-bold text-neutral-50 leading-snug">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-400 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
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

      {/* Divider */}
      <div className="divider !my-0" />

      {/* Actions */}
      <div className="flex items-center gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4"
          >
            Live Demo ↗
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs py-2 px-4"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}
