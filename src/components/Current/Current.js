import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import 'moment/locale/en-gb'
import 'moment/locale/pl'
// import 'moment-timezone'

import Icon from '../Icon/Icon'
import DataCircle from '../DataCircle/DataCircle'

import MainInfo from './MainInfo/MainInfo'
import ListInfo from './ListInfo/ListInfo'

import { getTimeFromSeconds, formatNumber } from '../../data/utils'

import classes from './Current.module.scss'



const Current = ({
  currently, daily, currentText, dateText, timezone, locationShortName,
}) => {
  const now = moment().unix()
  const today = getTimeFromSeconds(now, timezone)
  const sunPositionTime = {
    sunrise: daily.data[0].sunriseTime,
    sunset: daily.data[0].sunsetTime,
  }

  return (
    <div className={classes.Current}>
      <MainInfo 
        locationShortName={locationShortName}
        currentText={currentText}
        currently={currently}
        dateText={dateText}
        today={today}
        timezone={timezone}
        sunPositionTime={sunPositionTime}
      />
      
      <div className={classes.circlesContainer}>
        <ul>
          <li><DataCircle type={currentText.humidity} unit="%" data={formatNumber(currently.humidity * 100)} additionalData={null} /></li>
          <li><DataCircle type={currentText.wind} unit="m/s" data={formatNumber(currently.windSpeed)} additionalData={currently.windBearing} /></li>
          <li><DataCircle type={currentText.precipProb} unit="%" data={formatNumber(currently.precipProbability * 100)} additionalData={null} /></li>
          <li><DataCircle type={currentText.cloudCov} unit="%" data={formatNumber(currently.cloudCover * 100)} additionalData={null} /></li>
        </ul>
      </div>

      <ListInfo 
        currentText={currentText}
        currently={currently}
        moonphase={Math.floor(daily.data[0].moonPhase * 100)}
      />
      
    </div>
  )
}

export default Current



Current.propTypes = {
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
  }),

  currentText: PropTypes.objectOf(PropTypes.string),

  locale: PropTypes.string,

  daily: PropTypes.shape({
    icon: PropTypes.string,
    summary: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      apparentTemperatureHigh: PropTypes.number,
      apparentTemperatureHighTime: PropTypes.number,
      apparentTemperatureLow: PropTypes.number,
      apparentTemperatureLowTime: PropTypes.number,
      apparentTemperatureMax: PropTypes.number,
      apparentTemperatureMaxTime: PropTypes.number,
      apparentTemperatureMin: PropTypes.number,
      apparentTemperatureMinTime: PropTypes.number,
      cloudCover: PropTypes.number,
      dewPoint: PropTypes.number,
      humidity: PropTypes.number,
      icon: PropTypes.string,
      moonPhase: PropTypes.number,
      ozone: PropTypes.number,
      precipAccumulation: PropTypes.number,
      precipIntensity: PropTypes.number,
      precipIntensityMax: PropTypes.number,
      precipIntensityMaxTime: PropTypes.number,
      precipProbability: PropTypes.number,
      precipType: PropTypes.string,
      pressure: PropTypes.number,
      summary: PropTypes.string,
      sunriseTime: PropTypes.number,
      sunsetTime: PropTypes.number,
      temperatureHigh: PropTypes.number,
      temperatureHighTime: PropTypes.number,
      temperatureLow: PropTypes.number,
      temperatureLowTime: PropTypes.number,
      temperatureMax: PropTypes.number,
      temperatureMaxTime: PropTypes.number,
      temperatureMin: PropTypes.number,
      temperatureMinTime: PropTypes.number,
      time: PropTypes.number,
      uvIndex: PropTypes.number,
      uvIndexTime: PropTypes.number,
      visibility: PropTypes.number,
      windBearing: PropTypes.number,
      windGust: PropTypes.number,
      windGustTime: PropTypes.number,
      windSpeed: PropTypes.number,
    })),
  }),

  timezone: PropTypes.string,

  locationShortName: PropTypes.string,

  dateText: PropTypes.shape({
    weekDay: PropTypes.arrayOf(PropTypes.string),
  }),
}

/*
time
summary

precipPropability
precipIntensity
temperature
apparentTemperature
dewPoint
humidity
pressure
windSpeed
windGust
windBearing (kierunek)
cloudCover
visibility
uvIndex


sunriseTime
sunsetTime
moonPhase
uvIndex
ozone
precipType
summary


*/