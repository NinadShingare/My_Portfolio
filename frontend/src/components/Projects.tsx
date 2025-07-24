'use client';

import { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  github: string;
  techStack: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Use build-time injected env var OR fallback (for safety)
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

  useEffect(() => {
    const url = `${baseUrl}/api/projects`;
    console.log('🔍 Fetching from:', url);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log('📦 Raw data:', data);
        setProjects(data);
      })
      .catch((err) => console.error('❌ Error fetching projects:', err));
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {projects.map((proj) => (
        <div key={proj.id} className="border p-4 rounded shadow mb-4">
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p>{proj.description}</p>
          <p className="text-sm text-gray-500">Tech Stack: {proj.techStack}</p>
          <a
            href={proj.github}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      ))}
    </section>
  );
}
