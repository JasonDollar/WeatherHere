import React from 'react'
import PropTypes from 'prop-types'
import classes from './Backdrop.module.scss'

const Backdrop = ({ showBackdrop, hideBackdrop }) => (
  showBackdrop ? <div className={classes.Backdrop} onClick={hideBackdrop} /> : null
) 

export default Backdrop

Backdrop.propTypes = {
  showBackdrop: PropTypes.bool.isRequired,
  hideBackdrop: PropTypes.func.isRequired,
}