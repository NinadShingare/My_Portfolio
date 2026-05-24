import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-gradient-brand hover:opacity-90 transition-opacity"
        >
          Ninad Shingare
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1 text-sm font-medium text-neutral-400">
          {[
            { href: '/projects', label: 'Projects' },
            { href: '/skills',   label: 'Skills'   },
            { href: '/about',    label: 'About'     },
            { href: '/contact',  label: 'Contact'   },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-lg hover:text-neutral-50 hover:bg-neutral-800 transition-all duration-200"
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://drive.google.com/file/d/1s3us55MDrABGHtl2EHQPOaYv3o5o1ZKx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-4 text-sm py-1.5 px-4"
          >
            Resume ↗
          </Link>
        </div>
      </div>
    </nav>
  )
}
