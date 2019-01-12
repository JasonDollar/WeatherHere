import React from 'react'
import classes from './Backdrop.module.scss'
import PropTypes from 'prop-types';

const Backdrop = ({ showBackdrop, hideBackdrop }) => (
  showBackdrop ? <div className={classes.Backdrop} onClick={hideBackdrop} /> : null
) 

export default Backdrop

Backdrop.propTypes = {
  showBackdrop: PropTypes.bool.isRequired,
  hideBackdrop: PropTypes.func.isRequired,
}