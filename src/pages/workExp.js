import React from 'react'
import styles from './workExp.module.css'
import PropTypes from 'prop-types'

const WORKS = [
  {
    company: 'Tegger',
    companyURL: 'https://tegger.io',
    desc: 'Plataforma descentralizada de recopilación de datos y analítica que comparte el valor de la información con usuarios, creadores de contenido y sitios web. Este proyecto surgió en cultura colectiva (medio de difusión de actividades artísticas, culturales y sociales)'
  },
  {
    company: 'axity',
    companyURL: 'https://www.axity.com',
    desc: 'Empresa de tecgnología de la información, que ayuda a sus clientes a maximizar su pontencial en su proceso de transformación digital'
  },
  {
    company: 'common sense',
    companyURL: 'https://commonsense.io',
    desc: 'Soluciones a problemas de usuarios y empresas transformando datos, tecnología y la voz del cliente en herramientas y productos que sean fáciles de operar'
  },
  {
    company: 'sngular',
    companyURL: 'https://sngular.com/',
    desc: 'desarrollo de soluciones de software para algunas de las instituiones financieras líderes en Europa y México'
  },
  {
    company: 'tecno informatíca coproceso',
    companyURL: '#',
    desc: 'primera aplicación para el seguimiento de juicios orales del nuevo sistema penal acusatorio de méxico realizada en conjunto con infotec.mx'
  },
  {
    company: 'roket',
    companyURL: 'http://roket.mx/',
    desc: 'soluciones tecnologícas generando nuevas expreriencias que aportan valor para el cliente y usuario'
  },
  {
    company: 'tecsia',
    companyURL: '#',
    desc: 'construir un sistema integral de inocuidad alimentaria para las empresas de este rubro haciendo uso tecnología'
  },
  {
    company: 'cesavesin',
    companyURL: 'http://www.cesavesin.org.mx/cms',
    desc: 'tiene su campo de acción en todo el estado de Sinaloa, basándose en la organización de productores agrícolas de manera regional en el nombre de Juntas Locales de Sanidad Vegetal'
  }
]

const Work = ({ company, companyURL, desc }) => (
  <div className={styles.work}>
    <h3 className={styles.workTitle}>
      <a href={companyURL} target='_blank' rel='noopener noreferrer'>{company}</a>
    </h3>
    <p>{desc}</p>
  </div>
)

Work.propTypes = {
  company: PropTypes.string,
  companyURL: PropTypes.string,
  desc: PropTypes.string
}

const WorkExp = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      Experiencia Laboral
    </h2>
    <p>
      En el pasado, he trabajado como ingeniero de software con muchas empresas líderes en México, principalmente en tecnología de punta, algunas de ellas son:
    </p>
    {WORKS.map((item, index) => (
      <Work key={index} {...item} />
    ))}

  </div>
)

export default WorkExp
