import React from 'react'
import classes from './Summary.module.scss'

const Summary = ({ children }) => (
  <p className={classes.Summary}>
    {children}
  </p>
)

export default Summary
