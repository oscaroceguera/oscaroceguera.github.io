import React from 'react'
import styles from './bio.module.css'
import me from './me.png'

const Bio = () => (
  <div className={styles.container}>
    <div>
      <img src={me} width='250px' alt='oscar-oceguera' />
    </div>
    <div className={styles.bio}>
      <p className={styles.bioDesc}>
        Soy un ingeniero en sistemas computacionales con mas de 8 años de experiencia en el desarrollo de aplicaciones web actualmente enfocado el ecosistema de javascript, los últimos años he participado en la construcción de Apps como front-end usando React.js y back-end con node.js. Me encanta poner atención al detalle al construir interfaces para el cliente, siempre pienso que debemos crear aplicaciones para facilitar el trabajo y desempeño de las personas.
        <br />
        <br />
        Actualmente soy parte de los organizadores del meetup mas importante de Javascript en México <a href='https://www.meetup.com/es/eventloop/' rel='noreferrer noopener' target='_blank'>eventloop</a>
      </p>
    </div>
  </div>
)

export default Bio
