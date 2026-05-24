import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ninad Shingare | AI/ML Engineer',
  description:
    'Portfolio of Ninad Shingare, an AI/ML Engineer focused on backend systems, intelligent products, and scalable application development.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main className="container mx-auto px-6 pt-24 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
