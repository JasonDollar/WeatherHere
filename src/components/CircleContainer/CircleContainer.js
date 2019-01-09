import React from 'react'
import DataCircle from './DataCircle/DataCircle'
import { formatNumber } from '../../data/utils'
import { unitsNames } from '../../data/unitsNames'

import classes from './CircleContainer.module.scss'


const CircleContainer = ({
  currently, currentText, graphColor, units, 
}) => (
  <div className={classes.circleContainer}>
    <ul>
      <li><DataCircle type={currentText.humidity} unit="%" data={formatNumber(currently.humidity * 100)} graphColor={graphColor} units={units} /></li>
      <li><DataCircle type={currentText.wind} unit={unitsNames[units].wind} data={formatNumber(currently.windSpeed)} additionalData={currently.windBearing} graphColor={graphColor} units={units} /></li>
      <li><DataCircle type={currentText.precipProb} unit="%" data={formatNumber(currently.precipProbability * 100)} graphColor={graphColor} units={units} /></li>
      <li><DataCircle type={currentText.cloudCov} unit="%" data={formatNumber(currently.cloudCover * 100)} graphColor={graphColor} units={units} /></li>
    </ul>
  </div>
)

export default CircleContainer
