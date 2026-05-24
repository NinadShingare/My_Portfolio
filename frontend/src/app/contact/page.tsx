import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto space-y-6 animate-fade-in-up">
      {/* Page header */}
      <div>
        <span className="badge-brand mb-3 inline-flex">Let&apos;s talk</span>
        <h1 className="section-heading">Contact Me</h1>
        <p className="text-neutral-400 text-sm">
          Have a project in mind or want to discuss an opportunity? Send me a message and
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />
    </section>
  )
}
