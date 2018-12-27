import React from 'react'
import DataCircle from './DataCircle/DataCircle'
import { formatNumber } from '../../../data/utils'

import classes from './CircleContainer.module.scss'


const CircleContainer = ({ currently, currentText, graphColor }) => (
  <div className={classes.circleContainer}>
    <ul>
      <li><DataCircle type={currentText.humidity} unit="%" data={formatNumber(currently.humidity * 100)} additionalData={null} graphColor={graphColor} /></li>
      <li><DataCircle type={currentText.wind} unit="m/s" data={formatNumber(currently.windSpeed)} additionalData={currently.windBearing} graphColor={graphColor} /></li>
      <li><DataCircle type={currentText.precipProb} unit="%" data={formatNumber(currently.precipProbability * 100)} additionalData={null} graphColor={graphColor} /></li>
      <li><DataCircle type={currentText.cloudCov} unit="%" data={formatNumber(currently.cloudCover * 100)} additionalData={null} graphColor={graphColor} /></li>
    </ul>
  </div>
)

export default CircleContainer
