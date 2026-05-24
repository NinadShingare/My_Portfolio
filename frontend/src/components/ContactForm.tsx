'use client'
import { useState } from 'react'
import axios from 'axios'

type StatusType = 'success' | 'error' | null

export default function ContactForm() {
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [message, setMessage] = useState('')
  const [status,  setStatus]  = useState<StatusType>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await axios.post(`/api/contact`, { name, email, message })
      setStatus('success')
      setName(''); setEmail(''); setMessage('')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-5" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Name
        </label>
        <input
          className="form-input"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Email
        </label>
        <input
          className="form-input"
          placeholder="you@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Message
        </label>
        <textarea
          className="form-input resize-none"
          placeholder="What would you like to say?"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending…' : 'Send Message →'}
      </button>

      {/* Status feedback — uses semantic token classes */}
      {status === 'success' && (
        <p className="badge-success justify-center py-2.5 text-sm rounded-lg">
          ✓ Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p className="badge-error justify-center py-2.5 text-sm rounded-lg">
          ✕ Failed to send. Please try again.
        </p>
      )}
    </form>
  )
}
