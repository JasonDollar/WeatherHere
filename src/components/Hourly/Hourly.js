import React from 'react'
import { 
  ResponsiveContainer, LineChart, XAxis, Line, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { getTimeFromSeconds, formatNumber } from '../../data/utils'

import CustomTooltip from '../CustomTooltip/CustomTooltip'

import classes from './Hourly.module.scss'

const Hourly = ({ hourly, hourlyText, timezone }) => { 

  const data = hourly.data
    .filter((item, index) => {
      if (index === 0 || index % 3 === 0) {
        return true
      } 
      return false
    })
    .map(item => {
      const time = getTimeFromSeconds(item.time, timezone)
      return {
        [hourlyText.temperature]: formatNumber(item.temperature),
        [hourlyText.precipProb]: formatNumber(item.precipProbability * 100),
        summary: item.summary,
        
        time: time.hour,
      }
    })

  const style = '#dd0055'
  return (
    <div className={classes.Hourly}>
      <p className={classes.Summary}>{hourly.summary}</p>
      <div className={classes.chartContainer}>
        <ResponsiveContainer width="110%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" type="number" tick={{ stroke: style }} domain={['auto', 'auto']} />
            <YAxis yAxisId="right" orientation="right" type="number" domain={[0, 100]} />
            <Tooltip
              content={<CustomTooltip tempText={hourlyText} type="hourly" />} 

            />
            <Legend layout="vertical" />
            <Line yAxisId="left" type="monotone" dataKey={hourlyText.temperature} stroke={style} activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey={hourlyText.precipProb} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    </div>
  )
}

export default Hourly

