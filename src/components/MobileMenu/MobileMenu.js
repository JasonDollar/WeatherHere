import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon'

import classes from './MobileMenu.module.scss'

const MobileMenu = ({
  text, showForecastHandler, showSearchHandler, showSettingsHandler, activeMenuClass,
}) => (
  <div className={classes.MobileMenu}>
    <button
      className={activeMenuClass === 'search' ? `${classes.active} ${classes.setting}` : classes.setting} 
      onClick={showSearchHandler}
    >
      <Icon icon="search" viewBox="0 0 50 50" />
      <p>{text.search}</p>
    </button>
    <button 
      className={activeMenuClass === 'forecast' ? `${classes.active} ${classes.setting}` : classes.setting} 
      onClick={showForecastHandler}
    >
      <Icon icon="sun" viewBox="0 0 50 50" />
      <p>{text.forecast}</p>
    </button>
    <button
      className={activeMenuClass === 'settings' ? `${classes.active} ${classes.setting}` : classes.setting} 
      onClick={showSettingsHandler}
    >
      <Icon icon="settings" viewBox="0 0 50 50" />
      <p>{text.settings}</p>
    </button>
  </div>
)

export default MobileMenu

MobileMenu.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired, 
  showForecastHandler: PropTypes.func.isRequired, 
  showSearchHandler: PropTypes.func.isRequired, 
  showSettingsHandler: PropTypes.func.isRequired, 
  activeMenuClass: PropTypes.string,
}