import React from 'react'

import { formatNumber } from '../../../data/utils'

import classes from './ListInfo.module.scss'

const ListInfo = ({ currentText, currently, moonphase }) => (
  <div className={classes.Current}>
  
    <div className={classes.element}>
      <div>{currentText.appTemp}</div>
      <div>
        {formatNumber(currently.apparentTemperature)}
        <span>°C</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.dewPoint}</div>
      <div>
        {formatNumber(currently.dewPoint)}
        <span>°C</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.pressure}</div>
      <div>
        {formatNumber(currently.pressure)} 
        <span>hPa</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.windGust}</div>
      <div>
        {formatNumber(currently.windGust)} 
        <span>m/s</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.precipInt}</div>
      <div>
        {formatNumber(currently.precipIntensity)} 
        <span>mm/h</span>
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.visibility}</div>
      <div>
        {formatNumber(currently.visibility)}
        <span>km</span>
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
