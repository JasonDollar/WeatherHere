import React from 'react'
import PropTypes from 'prop-types'
import { unitsNames } from '../../data/unitsNames'
import classes from './CustomTooltip.module.scss'



const CustomTooltip = ({
  label, payload, tempText, type, units, windowWidth
}) => {
  
  const longNameIndex = tempText.weekDay ? tempText.weekDayShort.findIndex(item => item === label) : null
  if (payload[0] && type === 'daily') {
    return ( 
      <div className={classes.Tooltip}>
        <p>{tempText.weekDay[longNameIndex] || tempText.today}</p>
        {windowWidth >= 577 ? <p>{payload[0].payload.summary}</p> : null}
        <p>{`${tempText.temperatureMax}: ${payload[0].value[0]}${unitsNames[units].temperature}`}</p>
        <p>{`${tempText.temperatureMin}: ${payload[0].value[1]}${unitsNames[units].temperature}`}</p>
      </div>
    ) 
  } 
  if (payload[0] && type === 'hourly') {
    return ( 
      <div className={classes.Tooltip}>
        <p>{`${tempText.hour}: ${label}`}</p>
        <p>{payload[0].payload.summary}</p>
        <p>{`${tempText.temperatureShort}: ${payload[0].value}${unitsNames[units].temperature}`}</p>
        <p>{`${tempText.precipProbShort}: ${payload[1].value}%`}</p>
      </div>
    ) 
  } 
  return <div />
  
}

export default CustomTooltip


CustomTooltip.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    dataKey: PropTypes.string,
    fill: PropTypes.string,
    formatter: PropTypes.string,
    name: PropTypes.string,
    payload: PropTypes.shape({
      Temperatura: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
      Temperature: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.number,
      ]),
      name: PropTypes.string,
      precipProbability: PropTypes.number,
      summary: PropTypes.string,
      time: PropTypes.string,
      temperature: PropTypes.number,
    }),
    unit: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.number,
    ]),
  })),

  tempText: PropTypes.shape({
    temperature: PropTypes.string,
    temperatureMax: PropTypes.string,
    temperatureMin: PropTypes.string,
    today: PropTypes.string,
    weekDay: PropTypes.arrayOf(PropTypes.string),
    hour: PropTypes.string,
    precipProp: PropTypes.string,
  }).isRequired,

  type: PropTypes.string.isRequired,

  label: PropTypes.string,
  units: PropTypes.string,
  windowWidth: PropTypes.number,
}


