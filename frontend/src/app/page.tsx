const highlights = [
  {
    label: 'Current role',
    value: 'AI/ML Engineer',
    detail: 'SV IT Global Solutions',
  },
  {
    label: 'Core focus',
    value: 'LLM Systems',
    detail: 'RAG, multi-agent orchestration, backend APIs',
  },
  {
    label: 'Experience',
    value: '1+ Years',
    detail: 'AI, backend, ETL, and full-stack delivery',
  },
]

const strengths = [
  'Built Generative AI and RAG pipelines',
  'Backend systems with Java, Spring Boot, FastAPI, and Node.js',
  'Enterprise data platforms, APIs, and cloud-ready architecture',
]

export default function HomePage() {
  return (
    <section className="space-y-10 animate-fade-in-up">
      <div className="section-shell subtle-grid overflow-hidden px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="badge-brand">AI/ML Engineer | Open to Relocation</span>

              <div className="space-y-4">
                <p className="eyebrow-label">Backend, GenAI, Intelligent Product Engineering</p>
                <h1 className="section-heading max-w-4xl text-[clamp(3rem,8vw,2.2rem)]">
                  Building enterprise-grade AI systems that are practical, scalable, and production-ready.
                </h1>
              </div>

              <p className="max-w-3xl text-lg text-neutral-600">
                I design backend platforms and AI-powered workflows for real business use cases,
                with experience across LLM orchestration, RAG architectures, data pipelines, and
                full-stack application delivery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="stat-card">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-extrabold text-neutral-900">{item.value}</p>
                  <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1_8Qwcz10DjX2S0GENXamjzF55oLEWDNa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume
              </a>
              <a href="/projects" className="btn-ghost">
                Explore Projects
              </a>
            </div>
          </div>

          <aside className="glass-card space-y-6 lg:mt-4">
            <div>
              <p className="eyebrow-label">What I bring</p>
              <h2 className="mt-3 text-2xl font-extrabold text-neutral-900">
                A skillset snapshot
              </h2>
            </div>

            <div className="space-y-4">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-neutral-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="divider" />

            <div className="space-y-3">
              <p className="text-sm font-semibold text-neutral-900">Primary stack</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Java',
                  'Python',
                  'Spring Boot',
                  'FastAPI',
                  'LangChain',
                  'LangGraph',
                  'Next.js',
                  'PostgreSQL',
                  'MongoDB',
                  'AWS',
                  'Git',
                  'Docker',
                ].map((tech) => (
                  <span key={tech} className="badge-brand">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4">
              <p className="text-sm text-neutral-700">
                Looking for backend, AI platform, or intelligent application engineering roles.
              </p>
              <a href="/contact" className="mt-3 inline-flex text-sm font-bold text-brand-700">
                Start a conversation
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
