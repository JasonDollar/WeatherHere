import React from 'react'

// import Options from '../Options/Options'
import Icon from '../Icon/Icon'
import Backdrop from '../Backdrop/Backdrop'
import layouts from '../../data/layouts'

import classes from './Settings.module.scss'

const Settings = ({
  changeLanguage, languageNames, selectedLanguage, showBackdrop, hideBackdrop, themeName, themeListHandler, text,
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
  return (
    <div>
      <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
      <div className={classes.Settings}>
        <div className={classes.menu}>
          <p>{text.changeLang}</p>
          <form className={classes.form}>
            {selectLanguageMenu}  
          </form>
        </div>

        <div className={classes.menu}>
          <p>{text.changeTheme}</p>
          <form className={classes.form}>
            {selectThemeMenu}

          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Settings
/*
<select name="lang" id="lang" onChange={changeLanguage} value={selectedLanguage}>
          <option value="pl">Polski</option>
          <option value="en">English</option>
        </select> */