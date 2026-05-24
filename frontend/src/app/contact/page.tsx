import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <section className="space-y-8 animate-fade-in-up">
      <div className="section-shell px-6 py-8 sm:px-10">
        <div className="max-w-3xl">
          <span className="badge-brand mb-3 inline-flex">Contact</span>
          <h1 className="section-heading">Let&apos;s talk about roles, projects, or collaboration.</h1>
          <p className="text-base text-neutral-600">
            If you are hiring for backend, AI platform, or intelligent product engineering roles,
            I&apos;d be glad to connect.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <aside className="glass-card space-y-5">
          <div>
            <p className="eyebrow-label">Direct contact</p>
            <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">Easy ways to reach me</h2>
          </div>

          <div className="space-y-4 text-sm text-neutral-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">Email</p>
              <a href="mailto:nvshingare67@gmail.com" className="mt-2 inline-flex font-semibold text-brand-700">
                nvshingare67@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ninadshingare/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex font-semibold text-brand-700"
              >
                linkedin.com/in/ninadshingare
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">Location</p>
              <p className="mt-2 font-semibold text-neutral-800">Pune, India</p>
              <p className="mt-1 text-neutral-600">Open to relocation</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
