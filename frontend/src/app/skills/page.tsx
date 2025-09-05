import SkillCard from '@/components/SkillCard'
import { getSkills } from '@/lib/api'

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
      <div className="mt-6">
            <h2 className="text-3xl font-extrabold mb-4 mx-4">Skills</h2>
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </section>
    </div>
  )
}
