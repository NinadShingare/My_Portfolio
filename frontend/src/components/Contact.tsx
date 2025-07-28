// components/Contact.tsx
'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\n\n${JSON.stringify(form, null, 2)}`);
    // Later: Send this to backend via POST
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full border p-2 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
