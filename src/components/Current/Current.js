import React from 'react'
import PropTypes from 'prop-types'

import MainInfo from './MainInfo/MainInfo'
import ListInfo from './ListInfo/ListInfo'
import CircleContainer from '../CircleContainer/CircleContainer'

import { getTimeFromSeconds } from '../../data/utils'


const Current = ({
  currently, daily, currentText, dateText, timezone, locationShortName, units,
}) => {
  const now = Date.now() / 1000 // need to convert to seconds
  const today = getTimeFromSeconds(now, timezone)
  const sunPositionTime = {
    sunrise: daily.data[0].sunriseTime,
    sunset: daily.data[0].sunsetTime,
  }

  return (
    <React.Fragment>
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
        units={units}
      />


      <ListInfo 
        currentText={currentText}
        currently={currently}
        moonphase={daily.data[0].moonPhase}
        units={units}
      />
      
    </React.Fragment>
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
  }).isRequired,

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
  }).isRequired,

  timezone: PropTypes.string.isRequired,

  locationShortName: PropTypes.string.isRequired,

  dateText: PropTypes.shape({
    weekDay: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  units: PropTypes.string.isRequired,
}
