import React from 'react'
import styles from './header.module.css'
import Nav from '../components/Nav'

const Header = () => (
  <div className={styles.container}>
    <Nav />
    <div className={styles.textBox}>
      <h1>Oscar Eduardo Oceguera Bibriesca</h1>
      <h2>Software Engineer focused on Javascript</h2>
    </div>
  </div >
)

export default Header
