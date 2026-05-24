import SkillCard from '@/components/SkillCard'
import { getSkills } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Page header */}
      <div className="px-1">
        <span className="badge-info mb-3 inline-flex">Tech Stack</span>
        <h1 className="section-heading">Skills</h1>
        <p className="text-neutral-400 text-sm max-w-xl">
          Technologies and tools I work with — color-coded by proficiency level.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 px-1">
        <span className="badge-success">Expert</span>
        <span className="badge-info">Advanced</span>
        <span className="badge-brand">Intermediate</span>
        <span className="badge-warning">Beginner</span>
      </div>

      {/* Grid */}
      <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <div
            key={skill.id}
            className={`animate-fade-in-up animate-delay-${Math.min(i * 100, 400)}`}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </section>
    </div>
  )
}
