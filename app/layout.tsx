import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jira-Funcionalidades',
  description: ' Una plataforma de gestión de proyectos y seguimiento de problemas diseñada para equipos de desarrollo de software. Ofrece herramientas para planificar, rastrear y gestionar proyectos, así como para colaborar en equipo.',
  generator: 'Wallend',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    interactiveWidget: 'resizes-content',
  },
  icons: {
    icon: [
      {
        url: '/Logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Logo.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
