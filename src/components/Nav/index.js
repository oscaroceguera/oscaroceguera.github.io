import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'
import styles from './styles.module.css'

const Nav = ({ secondary }) => {
  const stylesClass = classNames(styles.navLink, {
    [styles.secondary]: secondary
  })
  return (
    <div className={styles.nav}>
      <Link className={stylesClass} to='/'>Home</Link>
      <Link className={stylesClass} to='/blog'>Blog</Link>
      {/* <Link className={stylesClass} to='/'>Résumé</Link>
      <Link className={stylesClass} to='/'>portafolio</Link>
      <Link className={stylesClass} to='/'>contratame</Link> */}
    </div>
  )
}

Nav.propTypes = {
  secondary: PropTypes.bool
}

export default Nav
