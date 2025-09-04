import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my projects, skills, and experience'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
