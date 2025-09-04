import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
      <p className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline mt-2"
        >
          View
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline mt-2"
        >
          GitHub
        </a>
      </p>



    </div>
  )
}
