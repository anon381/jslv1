import type { Metadata } from 'next'
import './globals.css'
import SplashWrapper from '@/components/splash-wrapper'
import React from 'react'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Client wrapper with splash
  return (
    <html lang="en">
      <body>
  <SplashWrapper>{children}</SplashWrapper>
      </body>
    </html>
  )
}

// SplashWrapper moved to client component in components/splash-wrapper.tsx
