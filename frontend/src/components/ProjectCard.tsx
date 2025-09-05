import { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition glass-container max-w-3xl">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-300 dark:text-gray-400">{project.description}</p>
      TechStack:<p className="text-gray-300 dark:text-gray-400">{project.techStack}</p>
      <p className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 mt-2 rounded-lg shadow-lg hover:scale-105 transition"
        >
          View
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 mt-2 rounded-lg shadow-lg hover:scale-105 transition"
        >
          GitHub
        </a>
      </p>



    </div>
  )
}
