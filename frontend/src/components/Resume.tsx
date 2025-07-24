// components/Resume.tsx
export default function Resume() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download Resume
      </a>
    </section>
  );
}
