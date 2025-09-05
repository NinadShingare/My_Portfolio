import { Skill } from '@/types'

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm glass-container">
      <h4 className="font-medium font-semibold text-xl">{skill.skillname}</h4>
      <p className="text-sm text-gray-300 dark:text-gray-400">{skill.level}</p>
    </div>
  )
}
