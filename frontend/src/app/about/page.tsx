export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto animate-fade-in-up">
      <div className="glass-card flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Right Side - Profile Image (shown first on mobile) */}
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

        {/* Left Side - Description */}
        <div className="md:w-2/3 space-y-5">
          <div>
            <span className="badge-brand mb-3 inline-flex">About Me</span>
            <h1 className="section-heading">Building things that matter.</h1>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed">
            I am an AI/ML Engineer based in Pune, India, currently working at{" "}
            <span className="text-neutral-200 font-medium">SV IT Global Solutions</span>.
            My work sits at the intersection of backend engineering and applied AI, with
            hands-on experience building LLM-powered products, RAG systems, and multi-agent
            workflows for real-world business use cases.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Over the past year, I have worked across AI/ML engineering, backend development,
            and data-focused roles including an AI/ML Application Developer internship at{" "}
            <span className="text-neutral-200 font-medium">SV IT Global Solutions</span>, a{" "}
            <span className="text-neutral-200 font-medium">
              SQL and ETL internship at PRGX India Pvt. Ltd.
            </span>
            , and a{" "}
            <span className="text-neutral-200 font-medium">
              Backend Developer internship at Vyosim TechLab
            </span>
            . These roles helped me build a strong foundation in APIs, data pipelines,
            optimization, and production-ready engineering.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            My core stack includes{" "}
            <span className="text-neutral-200">
              Java, Python, JavaScript, Spring Boot, FastAPI, Node.js, Django, Next.js,
              LangChain, LangGraph, vector search, PostgreSQL, MongoDB, MySQL, Docker, AWS,
              Kafka, and Linux
            </span>
            . I enjoy designing scalable backend systems and combining them with modern AI
            tooling to deliver intelligent, reliable products.
          </p>

          <p className="text-neutral-400 text-sm leading-relaxed">
            I hold an MCA from Dr. D.Y. Patil Institute of Management and Research, Pune,
            and I am open to relocation for opportunities where I can contribute to backend,
            AI platform, or intelligent application development teams.
          </p>

          <div className="divider" />

          <p className="text-neutral-500 text-sm">
            Interested in working together? Email me at{" "}
            <a
              href="mailto:nvshingare67@gmail.com"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              nvshingare67@gmail.com
            </a>{" "}
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/ninadshingare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
