import { jsPDF } from 'jspdf'

interface Job {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
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
  skills: string[]
  degree: string
  years: string
  certifications: string[]
  downloadText: string
  locale: string
}

export function generateCV(data: CVData) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addWrappedText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const lines = doc.splitTextToSize(text, maxWidth)
    doc.text(lines, x, y)
    return y + lines.length * lineHeight
  }

  // Set colors
  const primaryColor: [number, number, number] = [59, 130, 246] // Blue
  const darkColor: [number, number, number] = [15, 23, 42] // Dark slate
  const grayColor: [number, number, number] = [100, 116, 139] // Slate gray

  // Header - Name and Title
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, pageWidth, 45, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(data.name, margin, 20)

  doc.setFontSize(14)
  doc.setFont('helvetica', 'normal')
  doc.text(data.title, margin, 30)

  doc.setFontSize(10)
  doc.text(data.location, margin, 37)

  yPosition = 55

  // Contact Links
  doc.setTextColor(...darkColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('GitHub: https://github.com/oscaroceguera', margin, yPosition)
  doc.text(
    'LinkedIn: https://linkedin.com/in/oscaroceguerab',
    margin,
    yPosition + 6
  )
  yPosition += 18

  // Professional Summary Section
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(data.locale === 'en' ? 'Professional Summary' : 'Resumen Profesional', margin, yPosition)
  yPosition += 7

  doc.setTextColor(...darkColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  yPosition = addWrappedText(
    data.aboutParagraph1,
    margin,
    yPosition,
    pageWidth - 2 * margin,
    5
  )
  yPosition += 3
  yPosition = addWrappedText(
    data.aboutParagraph2,
    margin,
    yPosition,
    pageWidth - 2 * margin,
    5
  )
  yPosition += 10

  // Community Leadership Section
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(data.locale === 'en' ? 'Community Leadership' : 'Liderazgo Comunitario', margin, yPosition)
  yPosition += 7

  doc.setTextColor(...darkColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  yPosition = addWrappedText(
    data.community,
    margin,
    yPosition,
    pageWidth - 2 * margin,
    5
  )
  yPosition += 10

  // Check if we need a new page
  if (yPosition > pageHeight - 60) {
    doc.addPage()
    yPosition = margin
  }

  // Professional Experience Section
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(
    data.locale === 'en' ? 'Professional Experience' : 'Experiencia Profesional',
    margin,
    yPosition
  )
  yPosition += 7

  data.experience.forEach((job, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 80) {
      doc.addPage()
      yPosition = margin
    }

    // Company name
    doc.setTextColor(...darkColor)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text(job.company, margin, yPosition)
    yPosition += 6

    // Position and period
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(job.position, margin, yPosition)

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...grayColor)
    const periodText = `${job.period} | ${job.location}`
    doc.text(periodText, margin, yPosition + 5)
    yPosition += 11

    // Description
    doc.setTextColor(...darkColor)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    yPosition = addWrappedText(
      job.description,
      margin,
      yPosition,
      pageWidth - 2 * margin,
      4.5
    )
    yPosition += 3

    // Achievements
    if (job.achievements && job.achievements.length > 0) {
      job.achievements.forEach((achievement) => {
        if (yPosition > pageHeight - margin - 10) {
          doc.addPage()
          yPosition = margin
        }
        yPosition = addWrappedText(
          `• ${achievement}`,
          margin + 3,
          yPosition,
          pageWidth - 2 * margin - 3,
          4.5
        )
        yPosition += 1
      })
    }

    // Add spacing between jobs
    if (index < data.experience.length - 1) {
      yPosition += 6
    } else {
      yPosition += 8
    }
  })

  // Check if we need a new page
  if (yPosition > pageHeight - 60) {
    doc.addPage()
    yPosition = margin
  }

  // Technical Skills Section
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(data.locale === 'en' ? 'Technical Skills' : 'Habilidades Técnicas', margin, yPosition)
  yPosition += 7

  doc.setTextColor(...darkColor)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')

  // Display skills in columns
  const skillsPerColumn = Math.ceil(data.skills.length / 3)
  const columnWidth = (pageWidth - 2 * margin) / 3
  let column = 0
  let skillIndex = 0

  data.skills.forEach((skill) => {
    const xPos = margin + column * columnWidth
    const yPos = yPosition + (skillIndex * 5)

    doc.setFillColor(240, 240, 240)
    doc.roundedRect(xPos, yPos - 3, columnWidth - 5, 5, 1, 1, 'F')
    doc.text(`• ${skill}`, xPos + 2, yPos)

    skillIndex++
    if (skillIndex >= skillsPerColumn) {
      skillIndex = 0
      column++
    }
  })

  yPosition += skillsPerColumn * 5 + 10

  // Check if we need a new page
  if (yPosition > pageHeight - 50) {
    doc.addPage()
    yPosition = margin
  }

  // Education Section
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(data.locale === 'en' ? 'Education' : 'Educación', margin, yPosition)
  yPosition += 7

  doc.setTextColor(...darkColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text(data.degree, margin, yPosition)
  yPosition += 5

  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...grayColor)
  doc.text(data.years, margin, yPosition)
  yPosition += 10

  // Certifications Section
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(data.locale === 'en' ? 'Recent Certifications' : 'Certificaciones Recientes', margin, yPosition)
  yPosition += 7

  doc.setTextColor(...darkColor)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')

  data.certifications.forEach((cert) => {
    if (yPosition > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }
    doc.text(`✓ ${cert}`, margin + 2, yPosition)
    yPosition += 5
  })

  // Footer
  doc.setFontSize(8)
  doc.setTextColor(...grayColor)
  doc.text(
    `Generated on ${new Date().toLocaleDateString(data.locale === 'en' ? 'en-US' : 'es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}`,
    pageWidth / 2,
    pageHeight - 10,
    { align: 'center' }
  )

  // Save the PDF
  const fileName = `Oscar_Oceguera_CV_${data.locale.toUpperCase()}.pdf`
  doc.save(fileName)
}
