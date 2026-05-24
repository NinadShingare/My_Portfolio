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
      label: '✉ Email',
      external: false,
    },
  ]

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-md border-t border-neutral-800 py-3">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Copyright */}
        <p className="text-xs text-neutral-500 tracking-wide">
          © {new Date().getFullYear()}{' '}
          <span className="text-neutral-300 font-medium">Ninad Shingare</span>
          . All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {links.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-xs font-medium text-neutral-400 hover:text-brand-400 transition-colors duration-200"
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
