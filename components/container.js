import styles from '../styles/container.module.scss'
import React from 'react'

export default function Container ({ children }) {
  return (
    <div className={styles.default}>
        { children }
    </div>
  )
}