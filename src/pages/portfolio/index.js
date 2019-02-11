import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from './styles.module.css'
import Site from './site.png'
import NormApp from './norm-app.png'
import GithubApp from './gh-app.png'
import Calories from './calories.png'
import CCC from './cc-challenge.png'

const Apps = [
  {
    img: Site,
    title: 'Personal website',
    description: `Website personal con blog usando <a href='https://www.gatsbyjs.org/' rel='noopener noreferrer' target='_blank'>Gatsbyjs</a>`,
    repos: [
      `<a href='https://github.com/oscaroceguera/ooceguera-site'>Frontend</a>`
    ],
    cloud: `<a href='https://oscaroceguera.github.io/'>oscaroceguera.com</a>`
  },
  {
    img: NormApp,
    title: 'fs-check',
    description: `Admin para gestionar checklist, esta aplicación usa para el frontend (reactjs, redux, redux-sagas, react-router-dom, react-route-redux, create-react-app, immutablejs, css-modules, storybook) y en su API esta construida con Nodejs (express, mongoose, mocha, expect). En producción el Frontend esta en netlify y el Backend en Heroku.`,
    repos: [
      `<a href='https://github.com/oscaroceguera/my-repositories-app'>Frontend</a>`,
      `<a href='https://github.com/oscaroceguera/norm-admin-api'>Backend</a>`
    ],
    cloud: `<a href='https://wonderful-euclid-b9d94a.netlify.com'>Frontend en producción</a>`
  },
  {
    img: GithubApp,
    title: 'my-repositories-app',
    description: `Buscar los repositorios publicos de github por usernama y listar los issues del repositorio seleccionado (reactjs, webpack4).`,
    repos: [
      `<a href='https://github.com/oscaroceguera/my-repositories-app'>Frontend</a>`
    ],
    cloud: `<a href='https://reverent-swanson-de6003.netlify.com/'>Frontend en producción</a>`
  },
  {
    img: Calories,
    title: 'Calorias',
    description: `Agregar calorías consumidas por una persona, se listan el total de calorías consumidas por la persona, filtrado por día, mes y año, esta apliación usa para el frontend (reactjs, react-router-dom, webapck4, css-modules) y backend (Nodejs, express, mongodb).`,
    repos: [
      `<a href='https://github.com/oscaroceguera/calorie_challenge'>Frontend/Backend</a>`
    ],
    cloud: `<a href='https://wonderful-euler-3c44a0.netlify.com/login'>Frontend producción (user: goku@gmail.com, pass: lorem)</a>`
  },
  {
    img: CCC,
    title: 'Add issues',
    description: `Agregar issues conectandose a la API de github, esta apliación usa para el frontend (reactjs, react-router-dom, webapck4, css-modules) y backend (Nodejs, express).`,
    repos: [
      `<a href='https://github.com/oscaroceguera/cc_challenge'>Frontend/Backend</a>`
    ],
    cloud: `<a href='https://hungry-leakey-15a5f6.netlify.com/'>Front en producción</a>`
  }
]

const Card = ({ img, title, description, repos, cloud }) => {
  const _desc = description

  return (
    <div className={styles.card}>
      <img src={img} alt='site' className={styles.cardImg} />
      <div className={styles.cardDescContainer}>
        <h3 className={styles.descTitle}>{title}</h3>
        <p className={styles.descMsg} dangerouslySetInnerHTML={{ __html: _desc }} />
        <h4 className={styles.repos}>
          Repositorios {repos.map((item, index) => {
            return <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
          })}
        </h4>
        <div className={styles.cloud}>
          Cloud: <p dangerouslySetInnerHTML={{ __html: cloud }} />
        </div>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div>
      <Nav secondary />
      <h1 className={styles.titleSection}>MI TRABAJO</h1>
      <div className={styles.works}>
        {Apps.map((item, index) => {
          return <Card key={index} {...item} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
