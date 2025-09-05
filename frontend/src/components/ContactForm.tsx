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
      await axios.post(`/api/contact`, { name, email, message })
      setStatus('Message sent successfully!')
      setName(''); setEmail(''); setMessage('')
    } catch {
      setStatus('Failed to send message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 glass-container">
      <input className="w-full border p-2 rounded text-gray-200 bg-gray-800/95 backdrop-blur-md" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="w-full border p-2 rounded text-gray-200 bg-gray-800/95 backdrop-blur-md" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea className="w-full border p-2 rounded text-gray-200 bg-gray-800/95 backdrop-blur-md" placeholder="Message" rows={4} value={message} onChange={e => setMessage(e.target.value)} />
      <button className="text-white px-4 py-2 rounded bg-gray-800/80 ">Send</button>
      {status && <p>{status}</p>}
    </form>
  )
}
