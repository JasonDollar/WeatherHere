import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = ({ showBackdrop, hideBackdrop }) => (
  showBackdrop ? <div className={classes.Backdrop} onClick={hideBackdrop} onScroll={hideBackdrop} /> : null
) 

export default Backdrop
