import React from 'react'

import Icon from '../../Icon/Icon'

import { formatNumber, getTimeFromSeconds } from '../../../data/utils'
import classes from './MainInfo.module.scss'


const MainInfo = ({
  locationShortName, currentText, currently, dateText, today, timezone, sunPositionTime,
}) => (
  <div className={classes.MainInfo}>
    <div className={classes.weather}>
      <div className={classes.city}>{locationShortName || currentText.location}</div>
      <div className={classes.icon}>
        <Icon icon={currently.icon} viewBox="0 0 100 100" />  
      </div>   
      <div className={classes.temperature}>
        {/*<Icon icon="temp" viewBox="0 0 100 100" />*/}
        {formatNumber(currently.temperature)}
        <span>°C</span>
      </div>
      
    </div>
    <div className={classes.timeInfo}>
      <div className={classes.date}>
        {dateText.weekDay[today.day]} 
        {' '}
        {today.month}
      </div>
      <div className={classes.sunContainer}>
        <div className={classes.sun}>
          <Icon icon="sunrise" viewBox="0 0 100 100" />
          <span>{getTimeFromSeconds(sunPositionTime.sunrise, timezone).hour}</span>
        </div>
        <div className={classes.sun}>
          <Icon icon="sunset" viewBox="0 0 100 100" />
          <span>{getTimeFromSeconds(sunPositionTime.sunset, timezone).hour}</span>
        </div>
      </div>
    </div>
    <p className={classes.summary}>{currently.summary}</p>
  </div>

      

)

export default MainInfo
