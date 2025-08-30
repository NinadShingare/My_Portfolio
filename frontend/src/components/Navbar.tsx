import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">My Portfolio</Link>
        <div className="space-x-6">
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
