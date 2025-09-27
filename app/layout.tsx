import type { Metadata } from 'next'
import './globals.css'
import { Inter, Figtree } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
import SplashWrapper from '@/components/splash-wrapper'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'JSL CHURCH',
  description: 'Jesus the Spring of Life International Church',
  generator: 'v0.dev',
  icons: {
    icon: '/photo_2025-08-28_15-19-22-removebg-preview.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Client wrapper with splash
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/photo_2025-08-28_15-19-22-removebg-preview.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} ${figtree.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SplashWrapper>{children}</SplashWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

// SplashWrapper moved to client component in components/splash-wrapper.tsx
