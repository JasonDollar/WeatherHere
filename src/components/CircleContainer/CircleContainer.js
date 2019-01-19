import React from 'react'
import PropTypes from 'prop-types'
import DataCircle from './DataCircle/DataCircle'
import { formatNumber } from '../../data/utils'
import { unitsNames } from '../../data/unitsNames'

import classes from './CircleContainer.module.scss'


const CircleContainer = ({
  currently, currentText, units, 
}) => (
  <div className={classes.circleContainer}>
    <ul>
      <li><DataCircle type={currentText.humidity} unit="%" data={formatNumber(currently.humidity * 100)} text={currentText} /></li>
      <li><DataCircle type={currentText.wind} unit={unitsNames[units].wind} data={formatNumber(currently.windSpeed)} additionalData={currently.windBearing} text={currentText} /></li>
      <li><DataCircle type={currentText.precipProb} unit="%" data={formatNumber(currently.precipProbability * 100)} text={currentText} /></li>
      <li><DataCircle type={currentText.cloudCov} unit="%" data={formatNumber(currently.cloudCover * 100)} text={currentText} /></li>
    </ul>
  </div>
)

export default CircleContainer

CircleContainer.propTypes = {
  currently: PropTypes.shape({
    apparentTemperature: PropTypes.number,
    cloudCover: PropTypes.number,
    dewPoint: PropTypes.number,
    humidity: PropTypes.number,
    icon: PropTypes.string,
    ozone: PropTypes.number,
    precipIntensity: PropTypes.number,
    precipProbability: PropTypes.number,
    pressure: PropTypes.number,
    summary: PropTypes.string,
    temperature: PropTypes.number,
    time: PropTypes.number,
    uvIndex: PropTypes.number,
    visibility: PropTypes.number,
    windBearing: PropTypes.number,
    windGust: PropTypes.number,
    windSpeed: PropTypes.number,
  }).isRequired,

  currentText: PropTypes.shape({
    today: PropTypes.string,
    humidity: PropTypes.string,
    wind: PropTypes.string,
    precipProb: PropTypes.string,
    precipType: PropTypes.string,
    precipInt: PropTypes.string,
    appTemp: PropTypes.string,
    dewPoint: PropTypes.string,
    pressure: PropTypes.string,
    cloudCov: PropTypes.string,
    visibility: PropTypes.string,
    uvIndex: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    moonphase: PropTypes.string,
    moon: PropTypes.arrayOf(PropTypes.string),
    ozone: PropTypes.string,
    windGust: PropTypes.string,
    location: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  units: PropTypes.string.isRequired,
}