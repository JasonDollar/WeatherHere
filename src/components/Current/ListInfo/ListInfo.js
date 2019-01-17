import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber, formatMoonPhase } from '../../../data/utils'
import { unitsNames } from '../../../data/unitsNames'
import classes from './ListInfo.module.scss'

const ListInfo = ({
  currentText, currently, moonphase, units, 
}) => (
  <div className={classes.Current}>
  
    <div className={classes.element}>
      <div>{currentText.appTemp}</div>
      <div>
        {formatNumber(currently.apparentTemperature)}
        <span>{unitsNames[units].temperature}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.dewPoint}</div>
      <div>
        {formatNumber(currently.dewPoint)}
        <span>{unitsNames[units].temperature}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.pressure}</div>
      <div>
        {formatNumber(currently.pressure)} 
        <span>{unitsNames[units].pressure}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.windGust}</div>
      <div>
        {formatNumber(currently.windGust)} 
        <span>{unitsNames[units].wind}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.precipInt}</div>
      <div>
        {formatNumber(currently.precipIntensity)} 
        <span>{unitsNames[units].precip}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.visibility}</div>
      <div>
        {formatNumber(currently.visibility)}
        <span>{unitsNames[units].distance}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.uvIndex}</div>
      <div>{formatNumber(currently.uvIndex)}</div>
    </div>
    <div className={classes.element}>
      <div>{currentText.moonphase}</div>
      <div>
        {formatMoonPhase(moonphase, currentText.moon)}
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.ozone}</div>
      <div>
        {formatNumber(currently.ozone)}
        <span>DU</span>
      </div>
    </div>

  </div>
)

export default ListInfo

ListInfo.propTypes = {
  currentText: PropTypes.shape({
    today: PropTypes.string,
    date: PropTypes.string,
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
    sun: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    moonphase: PropTypes.string,
    moon: PropTypes.arrayOf(PropTypes.string),
    ozone: PropTypes.string,
    windGust: PropTypes.string,
    location: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,

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

  moonphase: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
}