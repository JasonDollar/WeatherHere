import React from 'react'
import moment from 'moment'
import Icon from '../Icon/Icon'



import classes from './Current.module.scss'



const Current = ({
  currently, daily, hourly, text, locale,
}) => {
  console.log(hourly)
  moment.locale('pl')
  // console.log(locale, currently, moment(1541372400 * 1000).format('LL'))
  // const date = moment(currently.sunriseTime * 1000).format('LL')
  return (
    <div>
      <div className={classes.head}>
        <span>Miasto</span>
        <span>{currently.temperature}</span>
        
        <Icon icon={currently.icon} />
      </div>
      <div>
        <span>Data</span>
        <span>
          {'currently: '}
          {moment(currently.time * 1000).format()}
        </span>
        {' hourtly'}

        <span>{moment(hourly.data[0].time * 1000).format()}</span>
      </div>
      <div>{`${currently.summary} daily`}</div>
      <div>{`${hourly.summary} houtly`}</div>

      <ul>
        <li>{`preciProp ${hourly.data[0].precipProbability}`}</li>
        <li>{`[precip int] ${hourly.data[0].precipIntensity}`}</li>
        <li>{`temp ${hourly.data[0].temperature}`}</li>
        <li>{`apparent temp ${hourly.data[0].apparentTemperature}`}</li>
        <li>{`dewpoint ${hourly.data[0].dewPoint}`}</li>
        <li>{`humidity ${hourly.data[0].humidity}`}</li>
        <li>{`pressure ${hourly.data[0].pressure}`}</li>
        <li>{`windspeed ${hourly.data[0].windSpeed}`}</li>
        <li>{`windgust ${hourly.data[0].windGust}`}</li>
        <li>{`w.bearing ${hourly.data[0].windBearing}`}</li>
        <li>{`cloud cover ${hourly.data[0].cloudCover}`}</li>
        <li>{`visibility ${hourly.data[0].visibility}`}</li>
        <li>{`uvindex ${hourly.data[0].uvIndex}`}</li>
        <li>-----------------------------</li>
        <li>{`sunrise ${moment(daily.data[0].sunriseTime * 1000).format('LTS')}`}</li>
        <li>{`sunset ${moment(daily.data[0].sunsetTime * 1000).format('LTS')}`}</li>
        <li>{`moonphase ${daily.data[0].moonPhase}`}</li>
        <li>{`uv current ${daily.data[0].uvIndex}`}</li>
        <li>{`ozone ${daily.data[0].ozone}`}</li>
        <li>{`precip 5type ${daily.data[0].precipType}`}</li>
      </ul>
      
    </div>
  )
}

export default Current

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