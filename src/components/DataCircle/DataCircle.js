import React from 'react'
import {
  PieChart, Pie, Sector, Cell, ResponsiveContainer, 
} from 'recharts'
import Icon from '../Icon/Icon'

import classes from './DataCircle.module.scss'

const DataCircle = ({
  type, data, unit, additionalData, 
}) => {
  const style = { transform: `rotate(${additionalData - 90}deg)` }
  const style2 = { transform: `rotate(${additionalData}deg)` }
  const conic = { background: `conic-gradient(rgba(198,210,60,.5) 0 ${data}%, #fff ${data}% 100%)` }
  const smallData = 100 - data
  const wholeData = [{ name: '12', value: 12 }, { name: '88', value: 88 }]
  return (
    <div className={classes.DataCircle} style={conic}>
      
      <div className={classes.dataFront} />
      {additionalData !== null ? (
        <div style={style}>
          {additionalData !== null ? <Icon icon="arrow" /> : null}
        </div>  
      ) : null }
      <div className={classes.dataContainer}>
        <span>
          {data + unit}
        </span>
        
        <span>
          {type}
        </span>
      </div>
      
      {additionalData !== null ? <div className={classes.arrow} style={style2} /> : null}
    </div>
  ) 
  // return (
  //   <ResponsiveContainer heigh="100%" width="100%">
  //     <PieChart height={300} width={300}>
  //       <Pie
  //         data={wholeData}
  //         cx="50%"
  //         cy="50%"
  //         outerRadius={80} 
  //         fill="#8884d8"
  //       />
        
  //     </PieChart>
  //   </ResponsiveContainer>
  // )
}

export default DataCircle
