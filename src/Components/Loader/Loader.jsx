import React from 'react'
import styles from './Loader.module.css'
import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}><HashLoader color="#715693" /></div>
  )
}

export default Loader