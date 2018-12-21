import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import 'moment/locale/en-gb'
import 'moment/locale/pl'
// import 'moment-timezone'

import Icon from '../Icon/Icon'
import DataCircle from '../DataCircle/DataCircle'

import { getTimeFromSeconds, formatNumber } from '../../data/utils'

import classes from './Current.module.scss'



const Current = ({
  currently, daily, currentText, locale, dateText, timezone, locationShortName,
}) => {
  const now = moment().unix()
  const today = getTimeFromSeconds(now, timezone)
  
  //TODO jesli timezone bd zly moment wyswietli 'invalid date' w miejsce godziny
  return (
    <div className={classes.Current}>
      <div className={classes.main}>
        <div className={classes.main__city}>{locationShortName || currentText.location}</div>
        <div className={classes.date}>
          {dateText.weekDay[today.day]} 
          {' '}
          {today.month}
        </div>
        <div className={classes.main__temp}>
          <Icon icon="temp" viewBox="0 0 100 100" />
          {`${formatNumber(currently.temperature)}°C`}
        </div>
        <div className={classes.main__weather}>
          <Icon icon={currently.icon} viewBox="0 0 100 100" />  
        </div>
        <div className={classes.main__sun}>
          <div>
            <Icon icon="sunrise" viewBox="0 0 100 100" />
            <span>{moment.tz(daily.data[0].sunriseTime * 1000, timezone).format('HH:mm')}</span>
          </div>
          <div>
            <Icon icon="sunset" viewBox="0 0 100 100" />
            <span>{moment.tz(daily.data[0].sunsetTime * 1000, timezone).format('HH:mm')}</span>
            {/*<span>--</span>
            <span>{moment.tz(1544799127 * 1000, 'Asia/Tokyo').format('HH:MM')}</span>*/}
          </div>
        </div>
      </div>

      

      <p className={classes.Summary}>{currently.summary}</p>
      <div className={classes.circlesContainer}>
        <ul>
          
          <li><DataCircle type={currentText.humidity} unit="%" data={formatNumber(currently.humidity * 100)} additionalData={null} /></li>
          <li><DataCircle type={currentText.wind} unit="m/s" data={formatNumber(currently.windSpeed)} additionalData={currently.windBearing} /></li>
          <li><DataCircle type={currentText.precipProp} unit="%" data={formatNumber(currently.precipProbability * 100)} additionalData={null} /></li>
          
          <li><DataCircle type={currentText.cloudCov} unit="%" data={formatNumber(currently.cloudCover * 100)} additionalData={null} /></li>
          
          
          
        </ul>
      </div>


      <div className={classes.Current__list}>

        <div className={classes.Current__item}>
          <div>{currentText.appTemp}</div>
          <div>{`${formatNumber(currently.apparentTemperature)}°C`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.dewPoint}</div>
          <div>{`${formatNumber(currently.dewPoint)}°C`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.pressure}</div>
          <div>{`${formatNumber(currently.pressure)} hPa`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.windGust}</div>
          <div>{`${formatNumber(currently.windGust)} m/s`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.precipInt}</div>
          <div>{`${formatNumber(currently.precipIntensity)} mm/h`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.visibility}</div>
          <div>{`${formatNumber(currently.visibility)} km`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.uvIndex}</div>
          <div>{formatNumber(currently.uvIndex)}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.moonphase}</div>
          <div>{`${Math.floor(daily.data[0].moonPhase * 100)}%`}</div>
        </div>
        <div className={classes.Current__item}>
          <div>{currentText.ozone}</div>
          <div>{formatNumber(currently.ozone)}</div>
        </div>

      </div>
      
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