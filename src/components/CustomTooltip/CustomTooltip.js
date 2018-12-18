import React from 'react'
import PropTypes from 'prop-types'

import classes from './CustomTooltip.module.scss'



const CustomTooltip = ({ label, payload, tempText }) => {
  if (payload[0]) {
    return ( 
      <div className={classes.Tooltip}>
        <p>{`${tempText.temperatureMax}: ${payload[0].value[0]}`}</p>
        <p>{`${tempText.temperatureMin}: ${payload[0].value[1]}`}</p>
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
      Temperatura: PropTypes.arrayOf(PropTypes.number),
      Temperature: PropTypes.arrayOf(PropTypes.number),
      name: PropTypes.string,
    }),
    unit: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    
  })),

  tempText: PropTypes.shape({
    temperature: PropTypes.string.isRequired,
    temperatureMax: PropTypes.string.isRequired,
    temperatureMin: PropTypes.string.isRequired,
    today: PropTypes.string.isRequired,
    weekDay: PropTypes.arrayOf(PropTypes.string),
  }),
}


