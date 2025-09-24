import type { Metadata } from 'next'
import './globals.css'
import { Inter, Figtree } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
import SplashWrapper from '@/components/splash-wrapper'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Client wrapper with splash
  return (
    <html lang="en">
      <body className={`${inter.variable} ${figtree.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SplashWrapper>{children}</SplashWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

// SplashWrapper moved to client component in components/splash-wrapper.tsx
