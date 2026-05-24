import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const links = [
    {
      href: 'https://github.com/NinadShingare',
      label: 'GitHub',
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/ninadshingare/',
      label: 'LinkedIn',
      external: true,
    },
    {
      href: 'mailto:nvshingare67@gmail.com',
      label: 'Email',
      external: false,
    },
  ]

  return (
    <footer className="border-t border-slate-200/80 bg-transparent py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} <span className="font-bold text-neutral-800">Ninad Shingare</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {links.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-sm font-semibold text-neutral-500 hover:text-brand-700 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
