import React from 'react'
import Icon from '../Icon/Icon'

import classes from './MobileMenu.module.scss'

const MobileMenu = ({
  text, showForecastHandler, showSearchHandler, showSettingsHandler, activeMenuClass,
}) => (
  <div className={classes.MobileMenu}>
    <div
      className={activeMenuClass === 'search' ? `${classes.active} ${classes.setting}` : classes.setting} 
      onClick={showSearchHandler}
    >
      <Icon icon="search" viewBox="0 0 50 50" />
      <p>{text.search}</p>
    </div>
    <div 
      className={activeMenuClass === 'forecast' ? `${classes.active} ${classes.setting}` : classes.setting} 
      onClick={showForecastHandler}
    >
      <Icon icon="sun" viewBox="0 0 50 50" />
      <p>{text.forecast}</p>
    </div>
    <div
      className={activeMenuClass === 'settings' ? `${classes.active} ${classes.setting}` : classes.setting} 
      onClick={showSettingsHandler}
    >
      <Icon icon="settings" viewBox="0 0 50 50" />
      <p>{text.settings}</p>
    </div>
  </div>
)

export default MobileMenu