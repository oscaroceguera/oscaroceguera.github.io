'use client'

import { motion } from 'framer-motion'

interface Hero {
  name: string
  title: string
  subtitle: string
  github: string
  linkedin: string
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
  skills: Skills
  education: Education
  footer: Footer
}

export default function AnimatedHome({
  hero,
  about,
  skills,
  education,
  footer,
}: AnimatedHomeProps) {
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
      {/* Hero Section */}
      <motion.section
        className="mx-auto max-w-6xl px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="mb-4 text-5xl font-bold text-white sm:text-7xl"
            variants={scaleRotate}
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
          <motion.div className="flex gap-4" variants={fadeInUp}>
            <motion.a
              href="https://github.com/oscaroceguera"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.github}
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/oscaroceguerab"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.linkedin}
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="bg-slate-800/50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="mb-8 text-3xl font-bold text-white"
            variants={fadeInUp}
          >
            {about.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={slideFromLeft}>
              <p className="mb-4 text-lg text-slate-300">{about.paragraph1}</p>
              <p className="text-lg text-slate-300">{about.paragraph2}</p>
            </motion.div>
            <motion.div
              className="rounded-lg bg-slate-700/50 p-6"
              variants={slideFromRight}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {about.location}
              </h3>
              <p className="mb-4 text-slate-300">{about.locationValue}</p>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {about.community}
              </h3>
              <p className="text-slate-300">{about.communityValue}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="mb-8 text-3xl font-bold text-white"
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
                className="rounded-lg bg-slate-700/50 px-6 py-4 text-center text-slate-200 transition hover:bg-slate-700"
                variants={cardVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  backgroundColor: 'rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)',
                }}
                whileTap={{ scale: 0.9 }}
                custom={index}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        className="bg-slate-800/50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2
            className="mb-8 text-3xl font-bold text-white"
            variants={fadeInUp}
          >
            {education.title}
          </motion.h2>
          <div className="space-y-6">
            <motion.div
              className="rounded-lg bg-slate-700/50 p-6"
              variants={slideFromLeft}
              whileHover={{
                scale: 1.03,
                x: 15,
                rotate: 1,
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
              }}
            >
              <h3 className="mb-2 text-xl font-semibold text-white">
                {education.degree}
              </h3>
              <p className="text-slate-300">{education.years}</p>
            </motion.div>
            <motion.div
              className="rounded-lg bg-slate-700/50 p-6"
              variants={slideFromRight}
              whileHover={{
                scale: 1.03,
                x: -15,
                rotate: -1,
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
              }}
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {education.certifications}
              </h3>
              <motion.ul
                className="space-y-2 text-slate-300"
                variants={containerVariants}
              >
                {education.certList.map((cert, index) => (
                  <motion.li
                    key={cert}
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ x: 10, color: '#60a5fa' }}
                  >
                    • {cert}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-8 text-center text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>{footer.copyright}</p>
      </motion.footer>
    </>
  )
}
