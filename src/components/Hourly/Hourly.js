import React from 'react'
import PropTypes from 'prop-types'
import { 
  ResponsiveContainer, LineChart, XAxis, Line, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { getTimeFromSeconds, formatNumber } from '../../data/utils'

import CustomTooltip from '../CustomTooltip/CustomTooltip'
import Summary from '../Summary/Summary'

import classes from './Hourly.module.scss'

const Hourly = ({
  hourly, hourlyText, timezone, units,
}) => { 
  let fullTempDisplay
  const data = hourly.data
    .filter((item, index) => {
      if (index === 0 || index % 3 === 0) {
        return true
      } 
      return false
    })
    .map(item => {
      const time = getTimeFromSeconds(item.time, timezone)
      fullTempDisplay = `${hourlyText.temperature} (${units !== 'us' ? '°C' : '°F'})`
      return {
        [fullTempDisplay]: formatNumber(item.temperature),
        [hourlyText.precipProb]: formatNumber(item.precipProbability * 100),
        summary: item.summary,
        
        time: time.hour,
      }
    })

  const graphColorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary')
  const graphColorSecondary = getComputedStyle(document.documentElement).getPropertyValue('--color-anti-graph')
  const graphColorGrey = getComputedStyle(document.documentElement).getPropertyValue('--color-grey-graph')

  return (
    <section className={classes.Hourly}>
      <Summary>{hourly.summary}</Summary>
      <div className={classes.chartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" stroke={graphColorGrey} />
            <YAxis yAxisId="left" type="number" tick={{ stroke: graphColorPrimary }} domain={['auto', 'auto']} />
            <YAxis yAxisId="right" orientation="right" type="number" domain={[0, 100]} stroke={graphColorGrey} />
            <Tooltip
              content={<CustomTooltip tempText={hourlyText} type="hourly" units={units} />} 
            />
            <Legend layout="vertical" />
            <Line yAxisId="left" type="monotone" dataKey={fullTempDisplay} stroke={graphColorPrimary} activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey={hourlyText.precipProb} stroke={graphColorSecondary} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </section>
  )
}

export default Hourly

Hourly.propTypes = {
  hourly: PropTypes.shape({
    summary: PropTypes.string,
    icon: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.number,
        summary: PropTypes.string,
        icon: PropTypes.string,
        precipIntensity: PropTypes.number,
        precipProbability: PropTypes.number,
        temperature: PropTypes.number,
        apparentTemperature: PropTypes.number,
        dewPoint: PropTypes.number,
        humidity: PropTypes.number,
        pressure: PropTypes.number,
        windSpeed: PropTypes.number,
        windGust: PropTypes.number,
        windBearing: PropTypes.number,
        cloudCover: PropTypes.number,
        uvIndex: PropTypes.number,
        visibility: PropTypes.number,
        ozone: PropTypes.number,
      }),
    ),
  }).isRequired,
  hourlyText: PropTypes.shape({
    hour: PropTypes.string,
    precipProb: PropTypes.string,
    precipProbShort: PropTypes.string,
    temperature: PropTypes.string,
    temperatureShort: PropTypes.string,
  }).isRequired,
  timezone: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
}