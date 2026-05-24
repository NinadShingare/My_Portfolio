export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="glass-card flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Right Side — Profile Image (shown first on mobile) */}
        <div className="order-first md:order-last md:w-1/3 flex justify-center md:justify-end shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-2xl scale-110 -z-10" />
            <img
              src="/images/Ninad_Profile.jpg"
              alt="Ninad Shingare"
              className="rounded-full w-44 h-44 object-cover ring-2 ring-brand-500/40 shadow-lg"
            />
          </div>
        </div>

        {/* Left Side — Description */}
        <div className="md:w-2/3 space-y-5">
          <div>
            <span className="badge-brand mb-3 inline-flex">About Me</span>
            <h1 className="section-heading">Building things that matter.</h1>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Recent MCA graduate from Dr. D.Y. Patil Institute of Management and Research, Pune,
            with hands-on internship experience at{' '}
            <span className="text-neutral-200 font-medium">PRGX India Pvt. Ltd.</span> and{' '}
            <span className="text-neutral-200 font-medium">Vyosim TechLab</span>. Passionate
            about backend development and full-stack web application engineering.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Skilled in developing robust applications using{' '}
            <span className="text-neutral-200">
              Java, Spring Boot, Python, Django, Node.js
            </span>
            , and frontend technologies like HTML, CSS, JavaScript, and Shadcn UI. Proficient
            in working with{' '}
            <span className="text-neutral-200">MySQL, PostgreSQL, MongoDB</span>, and tools
            such as Git, Docker, and Postman.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            I enjoy building practical, scalable software solutions and continuously expanding
            my technical skill set. Actively seeking full-time opportunities in backend or
            full-stack development roles.
          </p>

          <div className="divider" />

          <p className="text-neutral-500 text-sm">
            Interested in working together? Email me at{' '}
            <a
              href="mailto:nvshingare67@gmail.com"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              nvshingare67@gmail.com
            </a>{' '}
            or connect on{' '}
            <a
              href="https://www.linkedin.com/in/ninadshingare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              LinkedIn ↗
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
