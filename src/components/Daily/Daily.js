import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import Summary from '../Summary/Summary'

import { getTimeFromSeconds, formatNumber } from '../../data/utils'
import classes from './Daily.module.scss'

const Daily = ({
  daily, dateText, timezone, units,
}) => {
  
  const graphColorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
  const graphColorSecondary = getComputedStyle(document.documentElement).getPropertyValue('--color-anti-graph')
  const graphColorGrey = getComputedStyle(document.documentElement).getPropertyValue('--color-grey-graph')
  const windowWidth = getComputedStyle(document.documentElement).getPropertyValue('--screen-width')
    .split('')
    .filter(item => !isNaN(item))
    .join('')
  let fullTempDisplay = `${dateText.temperature} (${units !== 'us' ? '°C' : '°F'})`

  const data = daily.data.map(({
    time, temperatureHigh, temperatureLow, summary, 
  }, index) => {
    const formattedHighTemperature = formatNumber(temperatureHigh)
    const formattedLowTemperature = (
      formattedHighTemperature === formatNumber(temperatureLow) ? formatNumber(temperatureLow - 0.1) : formatNumber(temperatureLow)
    )
    const day = getTimeFromSeconds(time, timezone)
    let dayName

    if (index === 0) {
      dayName = dateText.today
    } else {
      dayName = dateText.weekDayShort[day.day]
    }

    return {
      name: dayName,
      [fullTempDisplay]: [formattedHighTemperature, formattedLowTemperature],
      summary,
    }
  })

  
  
  return (
    <section className={classes.Daily}>
      <Summary>{daily.summary}</Summary>
      <div className={classes.chartContainer}> 
        <ResponsiveContainer height={300} width="95%">
          <BarChart maxBarSize={60} data={data}>
            <defs>
              <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="35%" stopColor={graphColorPrimary} stopOpacity={1} />
                <stop offset="95%" stopColor={graphColorSecondary} stopOpacity={0.98} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke={graphColorGrey} />
            <YAxis type="number" stroke={graphColorGrey} tick={{ stroke: graphColorPrimary }} />
            <Tooltip
              content={<CustomTooltip tempText={dateText} type="daily" units={units} windowWidth={parseInt(windowWidth)} />}
            />
            <Legend layout="horizontal" />
            <Bar dataKey={fullTempDisplay} fill="url(#colorPrimary)" unit={units} />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
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
  }).isRequired,

  timezone: PropTypes.string.isRequired,

  dateText: PropTypes.shape({
    weekDay: PropTypes.arrayOf(PropTypes.string),
    today: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    temperatureMax: PropTypes.string.isRequired,
    temperatureMin: PropTypes.string.isRequired,
  }).isRequired,

  units: PropTypes.string.isRequired,
}
