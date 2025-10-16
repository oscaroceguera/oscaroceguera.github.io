'use client'

import { motion } from 'framer-motion'
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
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="flex gap-2 rounded-lg bg-slate-800/90 p-2 shadow-lg backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {locales.map((locale) => (
          <Link key={locale} href={switchLocale(locale)}>
            <motion.div
              className={`rounded px-4 py-2 font-semibold uppercase transition ${
                currentLocale === locale
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {locale}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}
