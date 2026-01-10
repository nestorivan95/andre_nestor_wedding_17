import type { Metadata } from 'next'
import { Playfair_Display, Lato, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-elegant',
  display: 'swap',
})

const wedding = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'], // IMPORTANTE: cursiva real
  variable: '--font-wedding',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andrea & Nestor - Nuestra Boda',
  description: 'Invitación a nuestra boda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable} ${wedding.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}

