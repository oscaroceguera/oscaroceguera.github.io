import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getDictionary, isValidLocale } from '@/lib/i18n'
import type { Locale } from '@/next.config'
import { defaultLocale, locales } from '@/next.config'

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

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-4 text-5xl font-bold text-white sm:text-7xl">
            {hero.name}
          </h1>
          <p className="mb-8 text-2xl text-slate-300 sm:text-3xl">
            {hero.title}
          </p>
          <p className="mb-8 max-w-2xl text-lg text-slate-400">
            {hero.subtitle}
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/oscaroceguera"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
            >
              {hero.github}
            </a>
            <a
              href="https://www.linkedin.com/in/oscaroceguerab"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              {hero.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-800/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">{about.title}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-slate-300">{about.paragraph1}</p>
              <p className="text-lg text-slate-300">{about.paragraph2}</p>
            </div>
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                {about.location}
              </h3>
              <p className="mb-4 text-slate-300">{about.locationValue}</p>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {about.community}
              </h3>
              <p className="text-slate-300">{about.communityValue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">{skills.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.list.map((skill) => (
              <div
                key={skill}
                className="rounded-lg bg-slate-700/50 px-6 py-4 text-center text-slate-200 transition hover:bg-slate-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-slate-800/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-white">
            {education.title}
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-white">
                {education.degree}
              </h3>
              <p className="text-slate-300">{education.years}</p>
            </div>
            <div className="rounded-lg bg-slate-700/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                {education.certifications}
              </h3>
              <ul className="space-y-2 text-slate-300">
                {education.certList.map((cert) => (
                  <li key={cert}>• {cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <p>{footer.copyright}</p>
      </footer>
    </div>
  )
}
