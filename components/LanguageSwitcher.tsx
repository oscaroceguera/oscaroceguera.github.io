'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Locale } from '@/lib/locales'
import { locales } from '@/lib/locales'

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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        paddingLeft: '10px',
        borderLeft: '1px solid var(--line)',
      }}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={switchLocale(locale)}
          className="no-line"
          style={{
            fontSize: '12px',
            color:
              currentLocale === locale ? 'var(--foreground)' : 'var(--muted)',
            fontWeight: currentLocale === locale ? 600 : 400,
          }}
        >
          [{locale}]
        </Link>
      ))}
    </div>
  )
}
