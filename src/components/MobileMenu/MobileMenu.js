import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

import classes from './MobileMenu.module.scss'

const MobileMenu = ({
  text, showForecastHandler, showSearchHandler, showSettingsHandler, activeMenuClass,
}) => {
  const [activeClass, setActiveClass] = useState('forecast')
  return (
    <div className={classes.MobileMenu}>
      <button
        className={activeClass === 'search' ? `${classes.active} ${classes.setting}` : classes.setting} 
        onClick={() => {
          activeClass === 'search' ? setActiveClass('forecast') : setActiveClass('search')
          showSearchHandler()
        }}
        type="button"
      >
        <span className="hidden">{text.search}</span>
        <Icon icon="search" viewBox="0 0 50 50" />
        <span>{text.search}</span>
      </button>

      <button 
        className={activeClass === 'forecast' ? `${classes.active} ${classes.setting}` : classes.setting} 
        onClick={() => {
          setActiveClass('forecast')
          showForecastHandler()
        }}
        type="button"
      >
        <span className="hidden">{text.forecast}</span>
        <Icon icon="sun" viewBox="0 0 50 50" />
        <span>{text.forecast}</span>
      </button>
      
      <button
        className={activeClass === 'settings' ? `${classes.active} ${classes.setting}` : classes.setting} 
        onClick={() => {
          activeClass === 'settings' ? setActiveClass('forecast') : setActiveClass('settings')
          showSettingsHandler()
        }}
        type="button"
      >
        <span className="hidden">{text.setings}</span>
        <Icon icon="settings" viewBox="0 0 50 50" />
        <span>{text.settings}</span>
      </button>
    </div>
  )
}

export default MobileMenu

MobileMenu.propTypes = {
  text: PropTypes.shape({
    search: PropTypes.string,
    settings: PropTypes.string,
    forecast: PropTypes.string,
    geo: PropTypes.string,
    geoFull: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  showForecastHandler: PropTypes.func.isRequired, 
  showSearchHandler: PropTypes.func.isRequired, 
  showSettingsHandler: PropTypes.func.isRequired, 
  activeMenuClass: PropTypes.string.isRequired,
}