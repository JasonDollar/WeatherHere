import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => (
  <div className={classes.Footer}>
    <a href="https://darksky.net/poweredby/" target="_blank" rel="noopener noreferrer" className={classes.link}>Powered by DarkSky &rarr;</a>
  </div>
)

export default Footer
