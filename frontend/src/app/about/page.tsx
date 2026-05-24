const timeline = [
  {
    label: 'Current Focus',
    text: 'As an AI/ML Engineer at SV IT Global Solutions, I build production-oriented intelligent systems, including multi-agent workflows, migration automation, and applied LLM solutions designed for enterprise use cases.',
  },
  {
    label: 'Applied AI Delivery',
    text: 'My recent work includes conversational AI systems, RAG-based architectures, and automation pipelines that move beyond experimentation into dependable product delivery.',
  },
  {
    label: 'Engineering Foundation',
    text: 'My background across SQL, ETL, backend development, and API engineering gives me a strong systems mindset when designing scalable AI-enabled applications.',
  },
]

const capabilities = [
  'LLM orchestration and multi-agent systems',
  'Backend engineering with Java, Spring Boot, FastAPI, and Node.js',
  'RAG pipelines, vector search, and enterprise data workflows',
  'Cloud-ready delivery with AWS, Docker, Kafka, and modern databases',
]

export default function AboutPage() {
  return (
    <section className="space-y-8 animate-fade-in-up">
      <div className="section-shell px-6 py-8 sm:px-10 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div className="glass-card p-6">
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 rounded-[2rem] bg-blue-100 blur-2xl" />
              <img
                src="/images/Ninad_Profile.jpg"
                alt="Ninad Shingare"
                className="relative rounded-[2rem] w-full max-w-[280px] object-cover border border-white/80 shadow-xl"
              />
            </div>

            <div className="mt-6 space-y-3">
              <span className="badge-brand">Based in Pune, India</span>
              <h2 className="text-2xl font-extrabold text-neutral-900">
                AI/ML engineer with backend depth and delivery focus
              </h2>
              <p className="text-sm text-neutral-600">
                I work best at the intersection of intelligent systems, backend architecture,
                and product execution, building solutions that are practical, maintainable,
                and aligned with business outcomes.
              </p>
            </div>
          </div>

          <div className="space-y-7">
            <div>
              <span className="badge-info mb-3 inline-flex">About Me</span>
              <h1 className="section-heading">An engineer shaped by production work, data systems, and applied AI.</h1>
              <p className="max-w-3xl text-base text-neutral-600">
                My profile is built around solving real engineering problems with a combination of backend discipline
                and applied AI thinking. I have worked across enterprise data workflows, backend platforms, and
                modern AI systems, with experience turning ideas into usable solutions rather than stopping at prototypes.
              </p>
            </div>

            <div className="grid gap-4">
              {timeline.map((item) => (
                <div key={item.label} className="glass-card p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <p className="eyebrow-label">Capabilities</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <p className="text-sm font-semibold text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/75 px-5 py-5">
              <p className="text-sm text-neutral-700">
                I bring experience across AI/ML engineering, backend development, and data-intensive systems,
                and I am open to opportunities in backend, AI platform, and intelligent application engineering teams.
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                Reach me at{' '}
                <a href="mailto:nvshingare67@gmail.com" className="font-bold text-brand-700">
                  nvshingare67@gmail.com
                </a>{' '}
                or on{' '}
                <a
                  href="https://www.linkedin.com/in/ninadshingare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-700"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
