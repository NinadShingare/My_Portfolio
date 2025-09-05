import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-2xl font-extrabold text-white hover:text-blue-400 transition-colors"
        >
          My Portfolio
        </Link>
        <div className="space-x-6 text-gray-300">
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </div>
      </div>
    </nav>
  )
}
