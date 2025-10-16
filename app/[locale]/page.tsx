import AnimatedHome from '@/components/AnimatedHome'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getDictionary, isValidLocale } from '@/lib/i18n'
import type { Locale } from '@/lib/locales'
import { defaultLocale, locales } from '@/lib/locales'

export async function generateStaticParams(): Promise<{ locale: Locale }[]> {
  return locales.map((locale) => ({ locale }))
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  const locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale
  const dict = await getDictionary(locale)

  const hero = dict.hero as {
    name: string
    title: string
    subtitle: string
    github: string
    linkedin: string
  }
  const about = dict.about as {
    title: string
    paragraph1: string
    paragraph2: string
    location: string
    locationValue: string
    community: string
    communityValue: string
  }
  const skills = dict.skills as { title: string; list: string[] }
  const education = dict.education as {
    title: string
    degree: string
    years: string
    certifications: string
    certList: string[]
  }
  const footer = dict.footer as { copyright: string }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Language Switcher */}
      <LanguageSwitcher currentLocale={locale} />

      {/* Animated Content */}
      <AnimatedHome
        hero={hero}
        about={about}
        skills={skills}
        education={education}
        footer={footer}
      />
    </div>
  )
}
