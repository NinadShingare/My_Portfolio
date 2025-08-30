import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Head from 'next/head'; // Import Head component
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white antialiased">
          <Head>
            <title>My Portfolio</title> {/* Set the page title */}
            <meta name="description" content="Showcasing projects, skills, and experience" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
              rel="stylesheet"
            />
          </Head>

          {/* Navbar */}
          <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-semibold">My Portfolio</Link>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
                <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
              </ul>
            </div>
          </nav>

          {/* Toast notifications */}
          <Toaster position="top-right" />

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm">&copy; {new Date().getFullYear()} Ninad Shingare. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="https://github.com/NinadShingare" target="_blank" className="hover:text-white">
                  <span>GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/ninadshingare/" target="_blank" className="hover:text-white">
                  <span>LinkedIn</span>
                </Link>
                <Link href="mailto:nvshingare67@gmail.com" className="hover:text-white flex items-center gap-1">
                  <EnvelopeIcon className="h-5 w-5" /> Email
                </Link>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
