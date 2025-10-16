import type { Locale } from './locales'
import { defaultLocale, locales } from './locales'

type Translations = {
  [key: string]: string | string[] | Translations
}

const dictionaries: Record<Locale, () => Promise<Translations>> = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
}

export async function getDictionary(locale: Locale): Promise<Translations> {
  if (!locales.includes(locale)) {
    return dictionaries[defaultLocale]()
  }
  return dictionaries[locale]()
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
