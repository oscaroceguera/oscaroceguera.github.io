'use client'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import { generateCV } from '@/lib/generateCV'
import type { Locale } from '@/lib/locales'

interface Hero {
  name: string
  title: string
  roleLine: string
  subtitle: string
  availability: string
  highlights: string[]
  github: string
  linkedin: string
  downloadCV: string
}

interface About {
  title: string
  paragraph1: string
  paragraph2: string
  location: string
  locationValue: string
  community: string
  communityValue: string
}

interface Job {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
}

interface Experience {
  title: string
  jobs: Job[]
}

interface SkillGroup {
  name: string
  items: string[]
}

interface Skills {
  title: string
  list: string[]
  groups: SkillGroup[]
}

interface Education {
  title: string
  degree: string
  years: string
  certifications: string
  certList: string[]
}

interface Footer {
  copyright: string
}

interface AnimatedHomeProps {
  hero: Hero
  about: About
  experience: Experience
  skills: Skills
  education: Education
  footer: Footer
  locale: Locale
}

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const DownloadIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 3v10m0 0l-4-4m4 4l4-4" />
    <path d="M3 15v1.5A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V15" />
  </svg>
)

export default function AnimatedHome({
  hero,
  about,
  experience,
  skills,
  education,
  footer,
  locale,
}: AnimatedHomeProps) {
  const handleDownloadCV = () => {
    generateCV({
      name: hero.name,
      title: hero.title,
      subtitle: hero.subtitle,
      location: about.locationValue,
      github: 'https://github.com/oscaroceguera',
      linkedin: 'https://linkedin.com/in/oscaroceguerab',
      aboutParagraph1: about.paragraph1,
      aboutParagraph2: about.paragraph2,
      community: about.communityValue,
      experience: experience.jobs,
      skillGroups: skills.groups,
      degree: education.degree,
      years: education.years,
      certifications: education.certList,
      downloadText: hero.downloadCV,
      locale,
    })
  }

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* NAV */}
      <div
        className="nav"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          background: 'oklch(99% 0 0 / 0.92)',
          backdropFilter: 'blur(6px)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ fontSize: '13px', fontWeight: 600 }}>
          oscar-oceguera.dev
        </div>
        <div className="nav-links">
          <a href="#about" className="no-line">
            [about]
          </a>
          <a href="#experience" className="no-line">
            [experience]
          </a>
          <a href="#skills" className="no-line">
            [skills]
          </a>
          <a href="#education" className="no-line">
            [education]
          </a>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '88px var(--pad-x) 80px', maxWidth: '880px' }}>
        <div
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            marginBottom: '14px',
          }}
        >
          $ whoami<span className="cursor">_</span>
        </div>
        <h1 style={{ fontSize: '42px', lineHeight: 1.28 }}>{hero.name}</h1>
        <div
          style={{
            fontSize: '16px',
            color: 'oklch(48% 0 0)',
            marginTop: '8px',
          }}
        >
          {hero.roleLine}
        </div>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'oklch(32% 0 0)',
            maxWidth: '620px',
            marginTop: '22px',
          }}
        >
          {hero.subtitle}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '22px',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: '12px', color: 'oklch(40% 0 0)' }}>
            {hero.availability}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginTop: '20px',
          }}
        >
          {hero.highlights.map((item) => (
            <span
              key={item}
              style={{
                border: '1px solid var(--foreground)',
                padding: '5px 10px',
                fontSize: '11px',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
          <a
            href="https://github.com/oscaroceguera"
            target="_blank"
            rel="noopener noreferrer"
            className="no-line"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 18px',
              background: 'var(--foreground)',
              color: 'var(--background)',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            <GitHubIcon />
            ./{hero.github.toLowerCase()}
          </a>
          <a
            href="https://www.linkedin.com/in/oscaroceguerab"
            target="_blank"
            rel="noopener noreferrer"
            className="no-line"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 18px',
              border: '1px solid var(--foreground)',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            <LinkedInIcon />
            ./{hero.linkedin.toLowerCase()}
          </a>
          <button
            onClick={handleDownloadCV}
            type="button"
            className="no-line"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 18px',
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--muted)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <DownloadIcon />
            ./resume.pdf
          </button>
        </div>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        style={{
          padding: 'var(--pad-x)',
          borderTop: '1px solid var(--line)',
          maxWidth: '880px',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            marginBottom: '18px',
          }}
        >
          $ cat about.md
        </div>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.75,
            color: 'oklch(28% 0 0)',
          }}
        >
          {about.paragraph1}
        </p>
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.75,
            color: 'oklch(28% 0 0)',
            marginTop: '16px',
          }}
        >
          {about.paragraph2}
        </p>
        <div
          style={{
            marginTop: '26px',
            border: '1px solid var(--line)',
            fontSize: '12.5px',
          }}
        >
          <div
            className="kv-row"
            style={{ borderBottom: '1px solid oklch(90% 0 0)' }}
          >
            <span className="kv-label" style={{ color: 'var(--muted)' }}>
              {about.location.toLowerCase()}:
            </span>
            <span>{about.locationValue}</span>
          </div>
          <div className="kv-row">
            <span className="kv-label" style={{ color: 'var(--muted)' }}>
              {about.community.toLowerCase()}:
            </span>
            <span>{about.communityValue}</span>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        style={{
          padding: 'var(--pad-x)',
          borderTop: '1px solid var(--line)',
          background: 'oklch(97.5% 0 0)',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            marginBottom: '18px',
          }}
        >
          $ git log --oneline experience/
        </div>
        <div
          style={{
            maxWidth: '880px',
            border: '1px solid var(--line)',
            background: 'var(--background)',
          }}
        >
          {experience.jobs.map((job, index) => (
            <div
              key={job.company + job.period}
              className="row job-row"
              style={{
                borderBottom:
                  index < experience.jobs.length - 1
                    ? '1px solid oklch(90% 0 0)'
                    : 'none',
              }}
            >
              <div
                className="job-period"
                style={{
                  fontSize: '12px',
                  color: 'var(--muted)',
                  paddingTop: '2px',
                }}
              >
                {job.period}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ fontSize: '15px', fontWeight: 600 }}>
                    {job.company}
                  </span>
                  <span style={{ fontSize: '12.5px', color: 'oklch(48% 0 0)' }}>
                    {job.position}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '11.5px',
                    color: 'oklch(58% 0 0)',
                    marginTop: '3px',
                  }}
                >
                  {job.location}
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: 'oklch(32% 0 0)',
                    margin: '8px 0 0',
                  }}
                >
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div
        id="skills"
        style={{ padding: 'var(--pad-x)', borderTop: '1px solid var(--line)' }}
      >
        <div
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            marginBottom: '18px',
          }}
        >
          $ ls skills/
        </div>
        <div
          style={{
            maxWidth: '880px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
        >
          {skills.groups.map((group) => (
            <div key={group.name}>
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: 600,
                  marginBottom: '9px',
                }}
              >
                {group.name}/
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      border: '1px solid oklch(85% 0 0)',
                      padding: '6px 11px',
                      fontSize: '12px',
                      color: 'oklch(30% 0 0)',
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div
        id="education"
        style={{
          padding: 'var(--pad-x)',
          borderTop: '1px solid var(--line)',
          background: 'oklch(97.5% 0 0)',
        }}
      >
        <div
          style={{
            fontSize: '12px',
            color: 'var(--muted)',
            marginBottom: '18px',
          }}
        >
          $ cat certifications.json
        </div>
        <div
          style={{
            maxWidth: '880px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '15px', fontWeight: 600 }}>
              {education.degree}
            </span>
            <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
              {education.years}
            </span>
          </div>
          <div>
            <div
              style={{
                fontSize: '12px',
                color: 'var(--muted)',
                marginBottom: '12px',
              }}
            >
              {'// '}
              {education.certifications}
            </div>
            <div
              style={{
                border: '1px solid var(--line)',
                background: 'var(--background)',
              }}
            >
              {education.certList.map((cert, index) => (
                <div
                  key={cert}
                  className="row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderBottom:
                      index < education.certList.length - 1
                        ? '1px solid oklch(91% 0 0)'
                        : 'none',
                    fontSize: '13px',
                  }}
                >
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>
                    [x]
                  </span>
                  <span style={{ color: 'oklch(28% 0 0)' }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: 'auto',
          padding: '32px var(--pad-x)',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '12px',
          color: 'var(--muted)',
        }}
      >
        <div>{footer.copyright}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://github.com/oscaroceguera"
            target="_blank"
            rel="noopener noreferrer"
            className="no-line"
          >
            ./{hero.github.toLowerCase()}
          </a>
          <a
            href="https://www.linkedin.com/in/oscaroceguerab"
            target="_blank"
            rel="noopener noreferrer"
            className="no-line"
          >
            ./{hero.linkedin.toLowerCase()}
          </a>
        </div>
      </div>
    </div>
  )
}
