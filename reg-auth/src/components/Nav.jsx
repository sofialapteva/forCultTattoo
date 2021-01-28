import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles'
function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to='/' className={styles.link}>Home</NavLink>
      <NavLink to='/register' className={styles.link}>Register</NavLink>
      <NavLink to='/login' className={styles.link}>Login</NavLink>
    </nav>
  )
}

export default Nav
