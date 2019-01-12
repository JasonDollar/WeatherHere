import React from 'react'
import PropTypes from 'prop-types';
import { formatNumber, formatMoonPhase } from '../../../data/utils'
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
        {formatMoonPhase(moonphase, currentText.moon)}
      </div>
    </div>
    <div className={classes.element}>
      <div>{currentText.ozone}</div>
      <div>
        {formatNumber(currently.ozone)}
        <span>DU</span>
      </div>
    </div>

  </div>
)

export default ListInfo

ListInfo.propTypes = {
  currentText: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ])).isRequired,
  currently: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  moonphase: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
}