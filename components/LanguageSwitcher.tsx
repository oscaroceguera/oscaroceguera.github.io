'use client'

import type { Locale } from '@/next.config'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { locales } from '@/next.config'

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale
}) {
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <div className="fixed right-6 top-6 z-50">
      <div className="flex gap-2 rounded-lg bg-slate-800/90 p-2 shadow-lg backdrop-blur-sm">
        {locales.map((locale) => (
          <Link
            key={locale}
            href={switchLocale(locale)}
            className={`rounded px-4 py-2 font-semibold uppercase transition ${
              currentLocale === locale
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-700'
            }`}
          >
            {locale}
          </Link>
        ))}
      </div>
    </div>
  )
}
