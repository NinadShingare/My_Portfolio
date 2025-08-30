'use client'
import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, { name, email, message })
      setStatus('Message sent successfully!')
      setName(''); setEmail(''); setMessage('')
    } catch {
      setStatus('Failed to send message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full border p-2 rounded" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea className="w-full border p-2 rounded" placeholder="Message" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      {status && <p>{status}</p>}
    </form>
  )
}
