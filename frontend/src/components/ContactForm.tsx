'use client'
import { useState } from 'react'
import axios from 'axios'

type StatusType = 'success' | 'error' | null

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<StatusType>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      await axios.post(`/api/contact`, { name, email, message })
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-6" noValidate>
      <div>
        <p className="eyebrow-label">Send a message</p>
        <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">Share the opportunity or project context</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">
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

        <div className="flex flex-col gap-2">
          <label className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">
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
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-extrabold uppercase tracking-[0.14em] text-neutral-500">
          Message
        </label>
        <textarea
          className="form-input resize-none"
          placeholder="Tell me about the role, team, or project."
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="badge-success justify-center rounded-2xl py-3 text-sm">
          Message sent successfully.
        </p>
      )}
      {status === 'error' && (
        <p className="badge-error justify-center rounded-2xl py-3 text-sm">
          Message failed to send. Please try again.
        </p>
      )}
    </form>
  )
}
