import SkillCard from '@/components/SkillCard'
import { getSkills } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="section-shell px-6 py-8 sm:px-10">
        <div className="max-w-3xl">
          <span className="badge-info mb-3 inline-flex">Capabilities</span>
          <h1 className="section-heading">Technology stack across AI, backend, and delivery.</h1>
          <p className="text-base text-neutral-600">
            A recruiter-friendly view of the languages, frameworks, tools, and platforms I use in production work.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <span className="badge-success">Expert</span>
        <span className="badge-info">Advanced</span>
        <span className="badge-brand">Intermediate</span>
        <span className="badge-warning">Beginner</span>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
