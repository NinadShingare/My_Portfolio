// components/Skills.tsx
export default function Skills() {
  const skills = ['Java', 'Python', 'Spring Boot', 'Node.js', 'MySQL', 'MongoDB', 'Next.js', 'Docker', 'PostgreSQL', 'Kafka', 'Git', 'Linux'];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <li key={skill} className="bg-gray-200 px-4 py-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
