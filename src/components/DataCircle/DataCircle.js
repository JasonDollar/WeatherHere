import React from 'react'
// import { Doughnut } from 'react-chartjs-2'

import classes from './DataCircle.module.scss'

const DataCircle = ({
  type, data, unit, additionalData, 
}) => {
  const style = { transform: `rotate(${additionalData}deg)` }
  const conic = { background: `conic-gradient(rgba(198,210,60,.5) 0 ${data}%, #fff ${data}% 100%)` }
  return (
    <div className={classes.DataCircle} style={conic}>
      
      <div className={classes.dataFront} />
      <div className={classes.dataContainer}>
        <span>
          {data + unit}
        </span>
        
        <span>
          {type}
        </span>
      </div>
      
      {additionalData !== null ? <div className={classes.arrow} style={style} /> : null}
    </div>
  )
}

export default DataCircle
