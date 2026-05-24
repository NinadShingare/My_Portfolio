export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
      <div className="glass-card max-w-3xl w-full text-center space-y-6">
        {/* Eyebrow */}
        <span className="badge-brand mx-auto">AI/ML Engineer | Open to Relocation</span>

        {/* Hero heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gradient-brand">
          Ninad Shingare
        </h1>

        {/* Role subtitle */}
        <p className="text-xl font-medium text-neutral-300">
          AI/ML Engineer | Backend and Intelligent Systems
        </p>

        <div className="divider" />

        {/* Bio */}
        <p className="text-neutral-400 text-base leading-relaxed">
          AI/ML Engineer with 1+ years of experience building robust backend systems,
          RAG pipelines, and multi-agent workflows. Currently working at{" "}
          <span className="text-neutral-200 font-medium">SV IT Global Solutions</span>,
          with earlier experience across AI application development, SQL and ETL, and
          backend engineering.
        </p>

        <p className="text-neutral-400 text-sm leading-relaxed">
          Focused on Generative AI, LangChain, LangGraph, vector search, Spring Boot,
          FastAPI, Node.js, Next.js, PostgreSQL, MongoDB, AWS, Docker, Kafka, and Linux.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://drive.google.com/file/d/1s3us55MDrABGHtl2EHQPOaYv3o5o1ZKx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Resume
          </a>
          <a href="/contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>

        {/* Email hint */}
        <p className="text-xs text-neutral-500">
          Or email me at{" "}
          <a
            href="mailto:nvshingare67@gmail.com"
            className="text-brand-400 hover:text-brand-300 transition-colors"
          >
            nvshingare67@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
