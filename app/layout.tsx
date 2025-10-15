import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Oscar Oceguera',
  description: 'Professional portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
