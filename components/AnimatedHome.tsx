'use client'

import { motion } from 'framer-motion'

import { generateCV } from '@/lib/generateCV'
import type { Locale } from '@/lib/locales'

interface Hero {
  name: string
  title: string
  subtitle: string
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

interface Skills {
  title: string
  list: string[]
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
      skills: skills.list,
      degree: education.degree,
      years: education.years,
      certifications: education.certList,
      downloadText: hero.downloadCV,
      locale,
    })
  }
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  }

  const scaleRotate = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* Animated Background Gradient */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative z-10 mx-auto max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1"
            variants={scaleRotate}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="rounded-full bg-slate-900 px-6 py-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-sm font-semibold text-transparent">
                ✨ Available for Remote
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl"
            variants={scaleRotate}
            whileHover={{ scale: 1.05 }}
          >
            {hero.name}
          </motion.h1>
          <motion.p
            className="mb-8 text-2xl text-slate-300 sm:text-3xl"
            variants={fadeInUp}
          >
            {hero.title}
          </motion.p>
          <motion.p
            className="mb-8 max-w-2xl text-lg text-slate-400"
            variants={fadeInUp}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="https://github.com/oscaroceguera"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 font-semibold text-white shadow-lg"
              whileHover={{
                scale: 1.1,
                rotate: -2,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🐙 {hero.github}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/oscaroceguerab"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg"
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">💼 {hero.linkedin}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.button
              onClick={handleDownloadCV}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-3 font-semibold text-white shadow-lg"
              whileHover={{
                scale: 1.1,
                y: -3,
                boxShadow: '0 20px 60px rgba(34, 197, 94, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">📄 {hero.downloadCV}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="relative z-10 bg-slate-800/50 py-16 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent"
            variants={fadeInUp}
          >
            {about.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={slideFromLeft}>
              <motion.p
                className="mb-4 text-lg leading-relaxed text-slate-300"
                whileHover={{ x: 10, color: '#cbd5e1' }}
                transition={{ duration: 0.2 }}
              >
                {about.paragraph1}
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed text-slate-300"
                whileHover={{ x: 10, color: '#cbd5e1' }}
                transition={{ duration: 0.2 }}
              >
                {about.paragraph2}
              </motion.p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 shadow-xl"
              variants={slideFromRight}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                <span className="text-2xl">📍</span>
                {about.location}
              </h3>
              <p className="mb-4 text-slate-300">{about.locationValue}</p>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                <span className="text-2xl">👥</span>
                {about.community}
              </h3>
              <p className="text-slate-300">{about.communityValue}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="relative z-10 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent"
            variants={fadeInUp}
          >
            {skills.title}
          </motion.h2>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {skills.list.map((skill, index) => (
              <motion.div
                key={skill}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 px-6 py-4 text-center text-slate-200 shadow-lg backdrop-blur-sm"
                variants={cardVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                custom={index}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-cyan-500/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  className="relative z-10 font-medium"
                  whileHover={{
                    color: '#60a5fa',
                    textShadow: '0 0 8px rgba(96, 165, 250, 0.5)',
                  }}
                >
                  {skill}
                </motion.span>
                <motion.div
                  className="absolute -right-2 -bottom-2 h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.1,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        className="relative z-10 bg-slate-800/50 py-16 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent"
            variants={fadeInUp}
          >
            {education.title}
          </motion.h2>
          <div className="space-y-6">
            <motion.div
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 shadow-xl"
              variants={slideFromLeft}
              whileHover={{
                scale: 1.03,
                x: 15,
                rotate: 1,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
              }}
            >
              <motion.div
                className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <h3 className="relative mb-2 flex items-center gap-2 text-xl font-semibold text-white">
                <span className="text-2xl">🎓</span>
                {education.degree}
              </h3>
              <p className="relative text-slate-300">{education.years}</p>
            </motion.div>
            <motion.div
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 shadow-xl"
              variants={slideFromRight}
              whileHover={{
                scale: 1.03,
                x: -15,
                rotate: -1,
                boxShadow: '0 20px 60px rgba(147, 51, 234, 0.3)',
              }}
            >
              <motion.div
                className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <h3 className="relative mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                <span className="text-2xl">🏆</span>
                {education.certifications}
              </h3>
              <motion.ul
                className="relative space-y-2 text-slate-300"
                variants={containerVariants}
              >
                {education.certList.map((cert, index) => (
                  <motion.li
                    key={cert}
                    variants={fadeInUp}
                    custom={index}
                    className="flex items-start gap-2"
                    whileHover={{
                      x: 10,
                      color: '#60a5fa',
                      textShadow: '0 0 8px rgba(96, 165, 250, 0.5)',
                    }}
                  >
                    <span className="mt-1 text-blue-400">✓</span>
                    <span>{cert}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 border-t border-slate-700/50 py-8 text-center backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mx-auto max-w-6xl px-6"
          whileHover={{ scale: 1.02 }}
        >
          <p className="bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            {footer.copyright}
          </p>
          <motion.div
            className="mt-4 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://github.com/oscaroceguera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">🐙</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/oscaroceguerab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-2xl">💼</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.footer>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-0 h-2 w-2 rounded-full bg-blue-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}
