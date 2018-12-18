import React from 'react'
// import moment from 'moment'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

import { getTime, formatNumber } from '../../data/utils'
import classes from './Daily.module.scss'

const Daily = ({ daily, dateText, timezone }) => {
  console.log(daily, dateText)
  // const test = daily.data.map(item => getTime(item.time * 1000))

  const data = daily.data.map((item, index) => {
    
    const day = getTime(item.time * 1000, timezone)
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

  
  
  return (
    <div className={classes.Daily}>
      <div className={classes.Summary}>
        {daily.summary}
      </div>
      <ResponsiveContainer height={300} maxWidth="100%" minWidth="50%" margin={0}>
        <BarChart maxBarSize={60} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip tempText={dateText} />} />
          <Legend />
          <Bar dataKey={dateText.temperature} fill="#dd0055" unit="°C" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Daily


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