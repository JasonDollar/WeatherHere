import React from 'react'
import PropTypes from 'prop-types'
// import {
//   PieChart, Pie, Sector, Cell, ResponsiveContainer, 
// } from 'recharts'
import Icon from '../../../Icon/Icon'

import classes from './DataCircle.module.scss'

const DataCircle = ({
  type, data, unit, additionalData, graphColor,
}) => {
  const style = { transform: `rotate(${additionalData - 90}deg)` }
  const conic = { background: `conic-gradient(${graphColor.primary}99 0 ${data}%, #fff ${data}% 100%)` }

  return (
    <div className={classes.DataCircle} style={conic}>
      
      <div className={classes.dataFront} />
      <div className={classes.dataContainer}>
        {additionalData !== null ? (
          <div style={style} className={classes.bigArrow}>
            {additionalData !== null ? <Icon icon="arrow" viewBox="0 0 24 24" /> : null}
          </div>  
        ) : null }
        <span>
          {data + unit}
        </span> 
        
        <span>
          {type}
        </span>
      </div>
      
      {/*additionalData !== null ? <div className={classes.arrow} style={style2} /> : null*/}
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


DataCircle.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired, 
  additionalData: PropTypes.number,
}