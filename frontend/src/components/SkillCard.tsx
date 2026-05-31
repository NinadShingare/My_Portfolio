import { Skill } from '@/types'

const levelBadge: Record<string, string> = {
  expert: 'badge-success',
  advanced: 'badge-info',
  intermediate: 'badge-brand',
  beginner: 'badge-warning',
}

function getLevelBadge(level: string): string {
  const key = level.toLowerCase().trim()
  return levelBadge[key] ?? 'badge-brand'
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const level = skill.level ?? 'intermediate'

  return (
    <div className="glass-card flex min-h-[150px] flex-col justify-between gap-5">
      <div>
        <p className="eyebrow-label">Skill</p>
        <h4 className="mt-3 text-xl font-extrabold text-neutral-900 leading-tight">
          {skill.skillname}
        </h4>
      </div>

      <div>
        <span className={getLevelBadge(level)}>
          {level}
        </span>
      </div>
    </div>
  )
}
