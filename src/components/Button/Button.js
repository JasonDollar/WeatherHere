import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children, type = 'button', onButtonClick }) => (
  <button type={type} onClick={onButtonClick} className={classes.Button}>
    {children}
  </button>
)

export default Button
