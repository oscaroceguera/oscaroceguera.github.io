import { jsPDF } from 'jspdf'

interface Job {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
}

interface SkillGroup {
  name: string
  items: string[]
}

interface CVData {
  name: string
  title: string
  subtitle: string
  location: string
  github: string
  linkedin: string
  aboutParagraph1: string
  aboutParagraph2: string
  community: string
  experience: Job[]
  skillGroups: SkillGroup[]
  degree: string
  years: string
  certifications: string[]
  downloadText: string
  locale: string
}

const SKILL_GROUP_LABELS: Record<string, { en: string; es: string }> = {
  frontend: { en: 'Frontend', es: 'Frontend' },
  backend: { en: 'Backend', es: 'Backend' },
  testing: { en: 'Testing', es: 'Testing' },
  'data-infra': { en: 'Data & Infra', es: 'Datos e Infraestructura' },
  'ai-ml': { en: 'AI/ML', es: 'IA/ML' },
  'design-ux': { en: 'Design & UX', es: 'Diseño y UX' },
}

export function generateCV(data: CVData) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - 2 * margin
  const isEn = data.locale === 'en'
  let yPosition = margin

  const dark: [number, number, number] = [23, 23, 23]
  const text: [number, number, number] = [40, 40, 40]
  const muted: [number, number, number] = [128, 128, 128]
  const line: [number, number, number] = [224, 224, 224]
  const accent: [number, number, number] = [22, 141, 86]

  doc.setFont('courier', 'normal')

  const addWrappedText = (
    value: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
  ) => {
    const lines = doc.splitTextToSize(value, maxWidth)
    doc.text(lines, x, y)
    return y + lines.length * lineHeight
  }

  const ensureSpace = (needed: number) => {
    if (yPosition > pageHeight - needed) {
      doc.addPage()
      yPosition = margin
    }
  }

  const drawRule = (y: number) => {
    doc.setDrawColor(...line)
    doc.setLineWidth(0.2)
    doc.line(margin, y, pageWidth - margin, y)
  }

  const sectionLabel = (label: string) => {
    ensureSpace(30)
    doc.setTextColor(...muted)
    doc.setFontSize(10)
    doc.setFont('courier', 'bold')
    doc.text(label.toUpperCase(), margin, yPosition)
    yPosition += 6
  }

  // Header
  doc.setTextColor(...dark)
  doc.setFontSize(22)
  doc.setFont('courier', 'bold')
  doc.text(data.name, margin, yPosition + 4)
  yPosition += 10

  doc.setFontSize(12)
  doc.setFont('courier', 'normal')
  doc.setTextColor(...text)
  doc.text(data.title, margin, yPosition)
  yPosition += 7

  doc.setFontSize(9)
  doc.setTextColor(...muted)
  const contactLine = `${data.location}  ·  ${data.github.replace(/^https?:\/\//, '')}  ·  ${data.linkedin.replace(/^https?:\/\//, '')}`
  yPosition = addWrappedText(contactLine, margin, yPosition, contentWidth, 4.3)
  yPosition += 3
  drawRule(yPosition)
  yPosition += 10

  // Professional Summary
  sectionLabel(isEn ? 'Professional Summary' : 'Resumen Profesional')
  doc.setTextColor(...text)
  doc.setFontSize(9.5)
  doc.setFont('courier', 'normal')
  yPosition = addWrappedText(
    data.aboutParagraph1,
    margin,
    yPosition,
    contentWidth,
    4.3,
  )
  yPosition += 12

  // Experience
  ensureSpace(60)
  sectionLabel(isEn ? 'Experience' : 'Experiencia')

  data.experience.forEach((job, index) => {
    ensureSpace(45)

    doc.setFontSize(12)
    doc.setFont('courier', 'bold')
    doc.setTextColor(...dark)
    doc.text(job.company, margin, yPosition)
    const companyWidth = doc.getTextWidth(job.company)

    doc.setFontSize(10)
    doc.setFont('courier', 'normal')
    doc.setTextColor(...muted)
    doc.text(`  —  ${job.position}`, margin + companyWidth, yPosition)

    doc.setFontSize(8.5)
    doc.text(job.period, pageWidth - margin, yPosition, { align: 'right' })
    yPosition += 5

    doc.setFontSize(8.5)
    doc.setTextColor(...muted)
    doc.text(job.location, margin, yPosition)
    yPosition += 6

    doc.setFontSize(9.5)
    doc.setFont('courier', 'normal')
    doc.setTextColor(...text)
    yPosition = addWrappedText(
      job.description,
      margin,
      yPosition,
      contentWidth,
      4.3,
    )
    yPosition += 2

    job.achievements.forEach((achievement) => {
      ensureSpace(15)
      doc.setTextColor(...muted)
      doc.text('–', margin, yPosition)
      doc.setTextColor(...text)
      yPosition = addWrappedText(
        achievement,
        margin + 5,
        yPosition,
        contentWidth - 5,
        4.3,
      )
    })

    yPosition += index < data.experience.length - 1 ? 8 : 12
  })

  // Skills
  ensureSpace(50)
  sectionLabel(isEn ? 'Skills' : 'Habilidades')

  data.skillGroups.forEach((group) => {
    ensureSpace(20)
    const label = SKILL_GROUP_LABELS[group.name]
      ? SKILL_GROUP_LABELS[group.name][isEn ? 'en' : 'es']
      : group.name.charAt(0).toUpperCase() + group.name.slice(1)

    doc.setFontSize(9.5)
    doc.setFont('courier', 'bold')
    doc.setTextColor(...dark)
    doc.text(label, margin, yPosition)
    yPosition += 4.3

    doc.setFont('courier', 'normal')
    doc.setTextColor(...text)
    yPosition = addWrappedText(
      group.items.join(', '),
      margin,
      yPosition,
      contentWidth,
      4.3,
    )
    yPosition += 4
  })

  yPosition += 6

  // Education
  ensureSpace(45)
  sectionLabel(isEn ? 'Education' : 'Educación')

  doc.setFontSize(10.5)
  doc.setFont('courier', 'bold')
  doc.setTextColor(...dark)
  doc.text(data.degree, margin, yPosition)

  doc.setFontSize(8.5)
  doc.setFont('courier', 'normal')
  doc.setTextColor(...muted)
  doc.text(data.years, pageWidth - margin, yPosition, { align: 'right' })
  yPosition += 10

  // Certifications
  ensureSpace(35)
  sectionLabel(isEn ? 'Certifications' : 'Certificaciones')

  data.certifications.forEach((cert) => {
    ensureSpace(12)
    doc.setFillColor(...accent)
    doc.circle(margin + 0.8, yPosition - 1.2, 0.8, 'F')
    doc.setFontSize(9.5)
    doc.setFont('courier', 'normal')
    doc.setTextColor(...text)
    yPosition = addWrappedText(
      cert,
      margin + 5,
      yPosition,
      contentWidth - 5,
      4.3,
    )
    yPosition += 1
  })

  yPosition += 8

  // Community Leadership
  ensureSpace(30)
  sectionLabel(isEn ? 'Community Leadership' : 'Liderazgo Comunitario')
  doc.setFontSize(9.5)
  doc.setFont('courier', 'normal')
  doc.setTextColor(...text)
  addWrappedText(data.community, margin, yPosition, contentWidth, 4.3)

  // Footer on every page
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(7.5)
    doc.setFont('courier', 'normal')
    doc.setTextColor(...muted)
    doc.text(
      `Generated on ${new Date().toLocaleDateString(isEn ? 'en-US' : 'es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' },
    )
  }

  const fileName = `Oscar_Oceguera_CV_${data.locale.toUpperCase()}.pdf`
  doc.save(fileName)
}
