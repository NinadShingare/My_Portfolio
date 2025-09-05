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
      <body className="min-h-screen flex flex-col text-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
