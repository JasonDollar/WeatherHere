import React from 'react'
import PropTypes from 'prop-types';
import DataCircle from './DataCircle/DataCircle'
import { formatNumber } from '../../data/utils'
import { unitsNames } from '../../data/unitsNames'

import classes from './CircleContainer.module.scss'


const CircleContainer = ({
  currently, currentText, units, 
}) => (
  <div className={classes.circleContainer}>
    <ul>
      <li><DataCircle type={currentText.humidity} unit="%" data={formatNumber(currently.humidity * 100)} units={units} /></li>
      <li><DataCircle type={currentText.wind} unit={unitsNames[units].wind} data={formatNumber(currently.windSpeed)} additionalData={currently.windBearing} units={units} /></li>
      <li><DataCircle type={currentText.precipProb} unit="%" data={formatNumber(currently.precipProbability * 100)} units={units} /></li>
      <li><DataCircle type={currentText.cloudCov} unit="%" data={formatNumber(currently.cloudCover * 100)} units={units} /></li>
    </ul>
  </div>
)

export default CircleContainer

CircleContainer.propTypes = {
  currently: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])).isRequired,
  currentText: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])).isRequired,
  units: PropTypes.string.isRequired,
}