import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
      <p className="text-sm text-gray-500">Tech Stack: {project.techStack}</p>
      <p className="p-4">
      <a
                  href={project.github}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline mt-2 inline-block"
      >
        View
      </a>
      </p>
    </div>
  )
}
