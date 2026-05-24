import { Skill } from '@/types'

// Map skill level strings to semantic badge classes
const levelBadge: Record<string, string> = {
  expert:        'badge-success',
  advanced:      'badge-info',
  intermediate:  'badge-brand',
  beginner:      'badge-warning',
}

function getLevelBadge(level: string): string {
  const key = level.toLowerCase().trim()
  return levelBadge[key] ?? 'badge-brand'
}

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="glass-card flex flex-col gap-3 animate-fade-in-up">
      <h4 className="text-base font-semibold text-neutral-100 leading-tight">
        {skill.skillname}
      </h4>

      <span className={getLevelBadge(skill.level)}>
        {skill.level}
      </span>
    </div>
  )
}
