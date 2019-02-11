import React from 'react'
import styles from './styles.module.css'

const SOCIALS = [
  {
    name: 'github',
    link: 'https://github.com/oscaroceguera',
    alias: '/oscaroceguera'
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/oscaroceguerab/',
    alias: '/oscaroceguerab'
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/oscarOcegueraB',
    alias: '/oscarOcegueraB'
  },
  {
    name: 'email',
    link: 'oscaroceguera@gmail.com',
    alias: 'oscaroceguera@gmail.com'
  }
]

const Footer = () => (
  <div className={styles.container}>
    {SOCIALS.map((item, index) =>
      <div className={styles.itemLinks} key={index}>
        <a href={item.link} target='_blank' rel='noreferrer noopener' >
          {item.name} <br /> <span>{item.alias}</span>
        </a>
      </div>
    )}
  </div>
)

export default Footer
