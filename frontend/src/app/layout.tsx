import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ninad Shingare — Software Developer',
  description:
    'Portfolio of Ninad Shingare — Backend & Full-Stack Software Developer. Explore projects, skills, and get in touch.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/*
        Body background and text color come from globals.css CSS variables
        (--surface-bg and --text-primary), not ad-hoc Tailwind classes.
      */}
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
