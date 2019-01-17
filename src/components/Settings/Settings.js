import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import Backdrop from '../Backdrop/Backdrop'
import layouts from '../../data/layouts'
import { unitsNames } from '../../data/unitsNames'
import classes from './Settings.module.scss'

const Settings = ({
  showSettings,
  changeLanguage, 
  languageNames, 
  selectedLanguage, 
  showBackdrop, 
  hideBackdrop, 
  themeName, 
  themeListHandler, 
  text, 
  unitListHandler,
  units,
}) => {
  const selectLanguageMenu = languageNames.map(item => (
    <label 
      key={item.id}
      className={item.id === selectedLanguage ? `${classes.label} ${classes.active}` : classes.label}
    >
      <input
        type="radio"
        name="language"
        checked={item.id === selectedLanguage}
        value={item.id}
        onChange={changeLanguage}
        className={classes.radio}
      />
      <span className={classes.radioButton} style={item.id === selectedLanguage ? { opacity: 1 } : { opacity: 0 }}>
        <Icon icon="checkmark" viewBox="0 0 50 50" />
      </span>
      {item.name}
    </label>
  ))

  const selectThemeMenu = Object.keys(layouts)
    .map(item => (
      <label 
        key={layouts[item].name}
        className={layouts[item].id === themeName ? `${classes.label} ${classes.active}` : classes.label}
      >
        <input
          type="radio"
          name="theme"
          checked={layouts[item].id === themeName}
          value={layouts[item].id}
          onChange={themeListHandler}
          className={classes.radio}
        />
        <span className={classes.radioButton} style={layouts[item].id === themeName ? { opacity: 1 } : { opacity: 0 }}>
          <Icon icon="checkmark" viewBox="0 0 50 50" />
        </span>
        {layouts[item].name}
      </label>
    ))

  const selectUnitMenu = Object.keys(unitsNames).map((item, index) => (
    <label 
      key={unitsNames[item].id}
      className={unitsNames[item].id === units ? `${classes.label} ${classes.active}` : classes.label}
    >
      <input
        type="radio"
        name="units"
        checked={unitsNames[item].id === units}
        value={unitsNames[item].id}
        onChange={unitListHandler}
        className={classes.radio}
      />
      <span className={classes.radioButton} style={unitsNames[item].id === units ? { opacity: 1 } : { opacity: 0 }}>
        <Icon icon="checkmark" viewBox="0 0 50 50" />
      </span>
      {unitsNames[item].name}
    </label>
  ))
    
  return (
    <React.Fragment>
      <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
      <div
        className={classes.Settings}
        style={{ 
          transform: showSettings ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: showSettings ? '1' : '0',
        }}
      >
        <div className={classes.menu}>
          <p>{text.changeLang}</p>
          <form className={`${classes.form} ${classes.language}`}>
            {selectLanguageMenu}  
          </form>
        </div>

        <div className={classes.menu}>
          <p>{text.changeTheme}</p>
          <form className={`${classes.form} ${classes.theme}`}>
            {selectThemeMenu}

          </form>
        </div>
        <div className={`${classes.menu} ${classes.menuUnits}`}>
          <p>{text.changeUnits}</p>
          <form className={`${classes.form} ${classes.units}`}>
            {selectUnitMenu}

          </form>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default Settings

Settings.propTypes = {
  showSettings: PropTypes.bool.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  languageNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  selectedLanguage: PropTypes.string.isRequired,
  showBackdrop: PropTypes.bool.isRequired, 
  hideBackdrop: PropTypes.func.isRequired,
  themeName: PropTypes.string.isRequired, 
  themeListHandler: PropTypes.func.isRequired,
  text: PropTypes.shape({
    changeLang: PropTypes.string,
    changeTheme: PropTypes.string,
    changeUnits: PropTypes.string,
    units: PropTypes.arrayOf(PropTypes.string),
    iconName: PropTypes.string,
  }).isRequired, 
  unitListHandler: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,
}