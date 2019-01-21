import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../Icon/Icon'

import classes from './DataCircle.module.scss'

const DataCircle = ({
  type, data, unit, additionalData, text,
}) => {
  const graphColorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
  const graphColorSecondary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-offset')
  // const colorGrey = getComputedStyle(document.documentElement).getPropertyValue('--color-back')
  const colorGrey = getComputedStyle(document.documentElement).getPropertyValue('--color-grey-4')
  const style = { transform: `rotate(${additionalData - 90}deg)` }
  let conic 
  let rotateCSSVarRight
  let rotateCSSVarLeft
  let colorCSSRight
  let colorCSSLeft
  let elementName
  // determine which css variables this el. will be using
  if (type === text.humidity) {
    
    rotateCSSVarRight = '--s-right-rotate1'
    rotateCSSVarLeft = '--s-left-rotate1'
    colorCSSRight = '--s-right-color1'
    colorCSSLeft = '--s-left-color1'
    elementName = 'humidity'
  } else if (type === text.precipProb) {
    
    rotateCSSVarRight = '--s-right-rotate2'
    rotateCSSVarLeft = '--s-left-rotate2'
    colorCSSRight = '--s-right-color2'
    colorCSSLeft = '--s-left-color2'
    elementName = 'precipProb'
  } else if (type === text.cloudCov) {
    rotateCSSVarRight = '--s-right-rotate3'
    rotateCSSVarLeft = '--s-left-rotate3'
    colorCSSRight = '--s-right-color3'
    colorCSSLeft = '--s-left-color3'
    elementName = 'cloudCov'
  }

  // change of css variables to imitate conic-gradient
  if (data <= 0) {
    document.documentElement.style.setProperty(colorCSSRight, colorGrey)
    document.documentElement.style.setProperty(rotateCSSVarRight, '0deg')
    document.documentElement.style.setProperty(colorCSSLeft, colorGrey)
    document.documentElement.style.setProperty(rotateCSSVarLeft, '0deg')
    conic = { background: `conic-gradient(${colorGrey} 0% 100%)` }
  } else if (data < 50) {
    document.documentElement.style.setProperty(colorCSSRight, colorGrey)
    document.documentElement.style.setProperty(rotateCSSVarRight, `${parseInt(data * 3.6)}deg`)
    document.documentElement.style.setProperty(colorCSSLeft, colorGrey)
    document.documentElement.style.setProperty(rotateCSSVarLeft, '0deg')
    conic = { background: `conic-gradient(${graphColorPrimary} 0%, ${graphColorSecondary} ${data}%, ${colorGrey} ${data}% 100%)` }
  } else if (data === 50) {
    document.documentElement.style.setProperty(rotateCSSVarRight, '0deg')
    document.documentElement.style.setProperty(colorCSSRight, graphColorSecondary)
    document.documentElement.style.setProperty(rotateCSSVarLeft, '0deg')
    document.documentElement.style.setProperty(colorCSSLeft, colorGrey)
    conic = { background: `conic-gradient(${graphColorPrimary} 0%, ${graphColorSecondary} ${data}%, ${colorGrey} ${data}% 100%)` }
  } else if (data > 50) {
    document.documentElement.style.setProperty(rotateCSSVarRight, '0deg')
    document.documentElement.style.setProperty(colorCSSRight, graphColorSecondary)
    document.documentElement.style.setProperty(rotateCSSVarLeft, `${parseInt(data * 3.6) - 180}deg`)
    document.documentElement.style.setProperty(colorCSSLeft, colorGrey)
    conic = { background: `conic-gradient(${graphColorSecondary} 0%, ${graphColorSecondary} 50%,${graphColorPrimary} ${data}%, ${graphColorSecondary} ${data}%, ${colorGrey} ${data}% 100%)` }
  } else if (data >= 100) {
    document.documentElement.style.setProperty(rotateCSSVarRight, '0deg')
    document.documentElement.style.setProperty(colorCSSRight, graphColorSecondary)
    document.documentElement.style.setProperty(rotateCSSVarLeft, '0deg')
    document.documentElement.style.setProperty(colorCSSLeft, graphColorSecondary)
    conic = { background: `conic-gradient(${graphColorSecondary} 0%, ${graphColorSecondary} 50%,${graphColorPrimary} ${data}%, ${graphColorSecondary} ${data}%, ${colorGrey} ${data}% 100%)` }
  }
 
  return (
    <div className={`${classes.DataCircle} ${classes[elementName]}`}>
      <div className={classes.dataColor} style={conic} />
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
  text: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])).isRequired,
}

DataCircle.defaultProps = {
  additionalData: null,
}

