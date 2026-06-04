import { certifications, experiences, skillGroups } from '@/data/portfolio'

export const revalidate = 3600

export default function ExperiencePage() {
  return (
    <section className="space-y-8 animate-fade-in-up">
      <div className="section-shell px-6 py-8 sm:px-10">
        <div className="max-w-4xl">
          <span className="badge-info mb-3 inline-flex">Experience</span>
          <h1 className="section-heading">Applied AI, backend engineering, and data delivery experience.</h1>
          <p className="text-base text-neutral-600">
            A focused look at the work behind my profile, from production-oriented AI systems and RAG pipelines
            to SQL optimization, REST APIs, and full-stack delivery.
          </p>
        </div>
      </div>

      <section className="grid gap-5">
        {experiences.map((experience) => (
          <article key={experience.id} className="glass-card">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
              <div>
                <p className="eyebrow-label">{experience.type}</p>
                <h2 className="mt-3 text-2xl font-extrabold text-neutral-900">{experience.role}</h2>
                <p className="mt-2 text-base font-bold text-brand-700">{experience.company}</p>
                <p className="mt-2 text-sm text-neutral-500">{experience.location}</p>
                <p className="mt-1 text-sm font-semibold text-neutral-700">{experience.period}</p>
              </div>

              <div className="space-y-5">
                <p className="text-base text-neutral-600">{experience.summary}</p>

                <ul className="space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm text-neutral-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <span key={tech} className="badge-brand">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card">
          <p className="eyebrow-label">Technical Skills</p>
          <h2 className="mt-3 text-2xl font-extrabold text-neutral-900">Tools I use across AI and engineering work</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <h3 className="text-sm font-extrabold text-neutral-900">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="badge-brand">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-card">
          <p className="eyebrow-label">Credentials</p>
          <h2 className="mt-3 text-2xl font-extrabold text-neutral-900">Certifications</h2>

          <div className="mt-6 space-y-4">
            {certifications.map((certification) => (
              <div key={certification.id} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-base font-extrabold text-neutral-900">{certification.title}</p>
                <p className="mt-2 text-sm font-semibold text-brand-700">{certification.issuer}</p>
                <p className="mt-1 text-sm text-neutral-500">
                  {certification.status ? `${certification.status} - ` : ''}
                  {certification.date}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </section>
  )
}
