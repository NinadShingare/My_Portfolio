import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ninad Shingare | AI/ML Engineer',
  description:
    'Portfolio of Ninad Shingare, an AI/ML Engineer focused on backend systems, intelligent products, and scalable application development.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="container mx-auto flex-1 px-6 pb-12 pt-28">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
