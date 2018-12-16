import React from 'react'

import classes from './CustomTooltip.module.scss'



const Tooltip = ({ label, payload, tempText }) => {
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

export default Tooltip
