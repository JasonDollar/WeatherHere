import React from 'react'

// import Options from '../Options/Options'

import classes from './Settings.module.scss'

const Settings = ({ changeLanguage, showSettingsHandler }) => (
  <div className={classes.Settings}>
    <p onClick={showSettingsHandler}>Done</p>
    <select name="lang" id="lang" onChange={changeLanguage} defaultValue="pl">
      <option value="pl">Polski</option>
      <option value="en">English</option>
    </select>
  </div>
)

export default Settings
