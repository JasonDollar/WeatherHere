import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon/Icon'
import Summary from '../../Summary/Summary'
import { unitsNames } from '../../../data/unitsNames'

import { formatNumber, getTimeFromSeconds } from '../../../data/utils'
import classes from './MainInfo.module.scss'


const MainInfo = ({
  locationShortName, currentText, currently, dateText, today, timezone, sunPositionTime, units,
}) => (
  <div className={classes.MainInfo}>
    <div className={classes.weather}>
      <div className={classes.city}>{locationShortName || currentText.location}</div>
      <div className={classes.icon}>
        <Icon icon={currently.icon} viewBox="0 0 100 100" />  
      </div>   
      <div className={classes.temperature}>
        {/*<Icon icon="temp" viewBox="0 0 100 100" />*/}
        {formatNumber(currently.temperature)}
        <span>{unitsNames[units].temperature}</span>
      </div>
      
    </div>
    <div className={classes.timeInfo}>
      <div className={classes.date}>
        {dateText.weekDay[today.day]} 
        {' '}
        {today.month}
      </div>
      <div className={classes.sunContainer}>
        <div className={classes.sun}>
          <Icon icon="sunrise" viewBox="0 0 100 100" />
          <span>{getTimeFromSeconds(sunPositionTime.sunrise, timezone).hour}</span>
        </div>
        <div className={classes.sun}>
          <Icon icon="sunset" viewBox="0 0 100 100" />
          <span>{getTimeFromSeconds(sunPositionTime.sunset, timezone).hour}</span>
        </div>
      </div>
    </div>
    <Summary>{currently.summary}</Summary>
  </div>

      

)

export default MainInfo

MainInfo.propTypes = {
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
  }).isRequired,
  currently: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  locationShortName: PropTypes.string.isRequired,
  dateText: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])).isRequired,
  today: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired, 
  sunPositionTime: PropTypes.objectOf(PropTypes.number).isRequired, 
  units: PropTypes.string.isRequired,
}