import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/en-gb'
import 'moment/locale/pl'

import Icon from '../Icon/Icon'
import DataCircle from '../DataCircle/DataCircle'


import classes from './Current.module.scss'

const getTime = timestamp => ({
  month: moment(timestamp).format('D.M'),
  day: moment(timestamp).format('e'),
})

const Current = ({
  currently, daily, text, locale, date,
}) => {
  // locale === 'en' ? moment().locale('en-gb') : moment().locale('pl')
  const now = moment().valueOf()
  const today = getTime(now)
  
  console.log(currently, daily, text, locale, date)
  return (
    <div className={classes.Current}>
      <div className={classes.main}>
        <div className={classes.main__city}>Miasto</div>
        <div>
          {date.weekDay[today.day]} 
          {' '}
          {today.month}
        </div>
        <div className={classes.main__temp}>
          <Icon icon="temp" />
          {currently.temperature}
        </div>
        <div className={classes.main__weather}>
          <Icon icon={currently.icon} />  
        </div>
        <div className={classes.main__sun}>
          <div>
            <Icon icon="sunrise" />
            <span>{moment(daily.data[0].sunriseTime * 1000).format('LT')}</span>
          </div>
          <div>
            <Icon icon="sunset" />
            <span>{moment(daily.data[0].sunsetTime * 1000).format('LT')}</span>
          </div>
        </div>
      </div>

      <div>
        <span>Data</span>
        <span>
          {'currently: '}
          {moment(currently.time * 1000).format()}
        </span>
        
      </div>

      <div>{`${currently.summary} daily`}</div>
      <div className={classes.circlesContainer}>
        {'Circle data'}
        <ul>
          
          <li><DataCircle type={text.humidity} unit="%" data={currently.humidity * 100} additionalData={null} /></li>
          <li><DataCircle type={text.wind} unit="m/s" data={currently.windSpeed} additionalData={currently.windBearing} /></li>
          <li><DataCircle type={text.precipProp} unit="%" data={currently.precipProbability * 100} additionalData={null} /></li>
          <li><DataCircle type={text.precipInt} unit="mm/h" data={currently.precipIntensity.toFixed(1)} additionalData={null} /></li>
          {/*<li>{`windspeed ${currently.windSpeed}`}</li>
  <li>{`w.bearing ${currently.windBearing}`}</li>*/}
          
          
        </ul>
      </div>

      <ul className={classes.Current__list}>
        
        <li>{`apparent temp ${currently.apparentTemperature}`}</li>
        <li>{`dewpoint ${currently.dewPoint}`}</li>
        <li>{`pressure ${currently.pressure}`}</li>
        
        <li>{`windgust ${currently.windGust}`}</li>
        
        <li>{`cloud cover ${currently.cloudCover}`}</li>
        <li>{`visibility ${currently.visibility}`}</li>
        <li>{`uvindex ${currently.uvIndex}`}</li>
        <li>-----------------------------</li>
        <li>{`sunrise ${moment(daily.data[0].sunriseTime * 1000).format('LTS')}`}</li>
        <li>{`sunset ${moment(daily.data[0].sunsetTime * 1000).format('LTS')}`}</li>
        <li>{`moonphase ${daily.data[0].moonPhase}`}</li>
        <li>{`ozone ${currently.ozone}`}</li>
        
      </ul>
      
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

  text: PropTypes.objectOf(PropTypes.string),

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

  units: PropTypes.string,

  date: PropTypes.shape({
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