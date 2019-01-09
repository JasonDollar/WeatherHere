import React from 'react'

import { formatNumber } from '../../../data/utils'
import { unitsNames } from '../../../data/unitsNames'
import classes from './ListInfo.module.scss'

const ListInfo = ({
  currentText, currently, moonphase, units, 
}) => (
  <div className={classes.Current}>
  
    <div className={classes.element}>
      <div>{currentText.appTemp}</div>
      <div>
        {formatNumber(currently.apparentTemperature)}
        <span>{unitsNames[units].temperature}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.dewPoint}</div>
      <div>
        {formatNumber(currently.dewPoint)}
        <span>{unitsNames[units].temperature}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.pressure}</div>
      <div>
        {formatNumber(currently.pressure)} 
        <span>{unitsNames[units].pressure}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.windGust}</div>
      <div>
        {formatNumber(currently.windGust)} 
        <span>{unitsNames[units].wind}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.precipInt}</div>
      <div>
        {formatNumber(currently.precipIntensity)} 
        <span>{unitsNames[units].precip}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.visibility}</div>
      <div>
        {formatNumber(currently.visibility)}
        <span>{unitsNames[units].distance}</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.uvIndex}</div>
      <div>{formatNumber(currently.uvIndex)}</div>
    </div>
    <div className={classes.element}>
      <div>{currentText.moonphase}</div>
      <div>
        {moonphase}
        <span>%</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.ozone}</div>
      <div>{formatNumber(currently.ozone)}</div>
    </div>

  </div>
)

export default ListInfo
