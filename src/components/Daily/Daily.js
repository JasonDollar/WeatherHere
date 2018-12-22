import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

import { getTimeFromSeconds, formatNumber } from '../../data/utils'
import classes from './Daily.module.scss'

const Daily = ({ daily, dateText, timezone }) => {
  // const test = daily.data.map(item => getTimeFromSeconds(item.time * 1000))

  const data = daily.data.map((item, index) => {
    
    const day = getTimeFromSeconds(item.time, timezone)
    let dayName
    if (index === 0) {
      dayName = dateText.today
    } else dayName = dateText.weekDay[day.day]
    return {
      name: dayName,
      // change temperature later to localized name
      [dateText.temperature]: [formatNumber(item.temperatureHigh), formatNumber(item.temperatureLow)],
      
    }
  })
  
  const style = '#dd0055'

  
  
  return (
    <div className={classes.Daily}>
      <div className={classes.Summary}>
        {daily.summary}
      </div>
      <ResponsiveContainer height={300} width="95%" margin={0}>
        <BarChart maxBarSize={60} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label="°C" type="number" />
          <Tooltip
            content={<CustomTooltip tempText={dateText} type="daily" />}
            wrapperStyle={{
              backgroundColor: '#fff',
              border: '1px solid #555',
              borderRadius: '5px',
              boxShadow: '1px 1px 2px #333',
            }}
          />
          <Legend />
          <Bar dataKey={dateText.temperature} fill={style} unit="°C" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Daily

Daily.propTypes = {
  daily: PropTypes.shape({
    apparentTemperatureHighTime: PropTypes.number,
    apparentTemperatureHigh: PropTypes.number,
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
    precipIntensity: PropTypes.number,
    precipIntensityMax: PropTypes.number,
    precipIntensityMaxTime: PropTypes.number,
    precipProbability: PropTypes.number,
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
  }),

  timezone: PropTypes.string.isRequired,

  dateText: PropTypes.shape({
    weekDay: PropTypes.arrayOf(PropTypes.string),
    today: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    temperatureMax: PropTypes.string.isRequired,
    temperatureMin: PropTypes.string.isRequired,
  }),
}


/*
apparentTemperatureHigh: -8.77
apparentTemperatureHighTime: 1543582800
apparentTemperatureLow: -15.57
apparentTemperatureLowTime: 1543640400
apparentTemperatureMax: -8.77
apparentTemperatureMaxTime: 1543582800
apparentTemperatureMin: -13.37
apparentTemperatureMinTime: 1543615200
cloudCover: 0.04
dewPoint: -12.43
humidity: 0.54
icon: "wind"
moonPhase: 0.76
ozone: 285.51
precipIntensity: 0
precipIntensityMax: 0.0025
precipIntensityMaxTime: 1543579200
precipProbability: 0
pressure: 1026.8
summary: "Breezy in the morning."
sunriseTime: 1543559352
sunsetTime: 1543588381
temperatureHigh: -1.95
temperatureHighTime: 1543579200
temperatureLow: -8.79
temperatureLowTime: 1543640400
temperatureMax: -1.95
temperatureMaxTime: 1543579200
temperatureMin: -6.21
temperatureMinTime: 1543615200
time: 1543532400
uvIndex: 1
uvIndexTime: 1543572000
visibility: 16.09
windBearing: 145
windGust: 15.09
windGustTime: 1543561200
windSpeed: 7.16
*/