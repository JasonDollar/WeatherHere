import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../Icon/Icon'

import classes from './DataCircle.module.scss'

const DataCircle = ({
  type, data, unit, additionalData, 
}) => {
  const graphColorSecondary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-offset')
  const colorBackground = getComputedStyle(document.documentElement).getPropertyValue('--color-back')
  const style = { transform: `rotate(${additionalData - 90}deg)` }
  const conic = { background: `conic-gradient(${graphColorSecondary}99 0 ${data}%, ${colorBackground} ${data}% 100%)` }

  return (
    <div className={classes.DataCircle} style={conic}>
      
      <div className={classes.dataFront} />
      <div className={classes.dataContainer}>
        {additionalData !== null ? (
          <div style={style} className={classes.bigArrow}>
            {additionalData !== null ? <Icon icon="arrow" viewBox="0 0 24 24" /> : null}
          </div>  
        ) : null }
        <span>
          {data + unit}
        </span> 
        
        <span>
          {type}
        </span>
      </div>
      
    </div>
  ) 
}

export default DataCircle


DataCircle.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired, 
  additionalData: PropTypes.number,
}

DataCircle.defaultProps = {
  additionalData: null,
}