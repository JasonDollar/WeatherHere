import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import 'moment/locale/en-gb'
import 'moment/locale/pl'
// import 'moment-timezone'


import MainInfo from './MainInfo/MainInfo'
import ListInfo from './ListInfo/ListInfo'
import CircleContainer from '../CircleContainer/CircleContainer'

import { getTimeFromSeconds } from '../../data/utils'

import classes from './Current.module.scss'



const Current = ({
  currently, daily, currentText, dateText, timezone, locationShortName, graphColor, units,
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
        units={units}
      />
      
      <CircleContainer 
        currently={currently}
        currentText={currentText}
        graphColor={graphColor}
        units={units}
      />


      <ListInfo 
        currentText={currentText}
        currently={currently}
        moonphase={daily.data[0].moonPhase}
        units={units}
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

  currentText: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])),

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
