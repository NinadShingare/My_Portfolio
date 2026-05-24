export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
      <div className="glass-card max-w-3xl w-full text-center space-y-6">

        {/* Eyebrow */}
        <span className="badge-brand mx-auto">Available for full-time roles</span>

        {/* Hero heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gradient-brand">
          Ninad Shingare
        </h1>

        {/* Role subtitle */}
        <p className="text-xl font-medium text-neutral-300">
          Software Developer · Backend &amp; Full-Stack
        </p>

        <div className="divider" />

        {/* Bio */}
        <p className="text-neutral-400 text-base leading-relaxed">
          Recent MCA graduate with hands-on internship experience at{' '}
          <span className="text-neutral-200 font-medium">PRGX India Pvt. Ltd.</span> and{' '}
          <span className="text-neutral-200 font-medium">Vyosim TechLab</span>. Passionate
          about backend development and full-stack web application engineering.
        </p>

        <p className="text-neutral-400 text-sm leading-relaxed">
          Skilled in Java · Spring Boot · Hibernate · Kafka · Python · Django · Node.js ·
          Next.js · MySQL · PostgreSQL · MongoDB · Docker · Linux
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://drive.google.com/file/d/1s3us55MDrABGHtl2EHQPOaYv3o5o1ZKx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Resume ↗
          </a>
          <a href="/contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>

        {/* Email hint */}
        <p className="text-xs text-neutral-500">
          Or email me at{' '}
          <a href="mailto:nvshingare67@gmail.com" className="text-brand-400 hover:text-brand-300 transition-colors">
            nvshingare67@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
