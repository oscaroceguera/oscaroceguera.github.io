import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import { getDictionary, isValidLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/locales'
import { defaultLocale, locales } from '@/lib/locales'

import '../globals.css'

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export async function generateStaticParams(): Promise<{ locale: Locale }[]> {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale
  const dict = await getDictionary(locale)
  const metadata = dict.metadata as { title: string; description: string }

  return {
    title: metadata.title,
    description: metadata.description,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale

  return (
    <html lang={locale}>
      <body className={`${plexMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
