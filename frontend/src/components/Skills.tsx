// components/Skills.tsx
'use client';

import { useEffect, useState } from 'react';

type Skill = {
  id: number;
  skillname: string;
};
export default function Skills() {

    const [skills, setSkills] = useState<Skill[]>([]);

      // Use build-time injected env var OR fallback (for safety)
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

      useEffect(() => {
        const url = `${baseUrl}/api/skills`;
        console.log('🔍 Fetching from:', url);

        fetch(url)
          .then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
          })
          .then((data) => {
            console.log('📦 Raw data:', data);
            setSkills(data);
          })
          .catch((err) => console.error('❌ Error fetching skills:', err));
      }, []);


  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <li key={skill.id} className="bg-gray-200 px-4 py-2 rounded">{skill.skillname}</li>
        ))}
      </ul>
    </section>
  );
}
