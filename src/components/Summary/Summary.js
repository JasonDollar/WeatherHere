import React from 'react'
import classes from './Summary.module.scss'

const Summary = ({ children }) => (
  <h3 className={classes.Summary}>
    {children}
  </h3>
)

export default Summary

