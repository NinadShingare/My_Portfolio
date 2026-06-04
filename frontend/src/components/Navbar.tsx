import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/70 bg-[rgba(247,250,253,0.88)] backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-[1.9rem] font-extrabold tracking-[-0.04em] text-neutral-900"
        >
          Ninad <span className="text-gradient-brand">Shingare</span>
        </Link>

        <div className="flex items-center gap-1 text-sm font-bold text-neutral-600">
          {[
            { href: '/projects', label: 'Projects' },
            { href: '/experience', label: 'Experience' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 hover:bg-white hover:text-brand-700 transition-all duration-200"
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://drive.google.com/file/d/1s3us55MDrABGHtl2EHQPOaYv3o5o1ZKx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
