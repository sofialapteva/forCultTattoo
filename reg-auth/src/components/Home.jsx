import React from 'react'
import homeSvg from './home.svg'
import styles from './styles'
function Home() {
  return (
    <div className={styles.container}>
      Home
      <img src={homeSvg} alt='Home' className={styles.home} />
    </div>
  )
}

export default Home
