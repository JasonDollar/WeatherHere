import React from 'react'

// import Options from '../Options/Options'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Settings.module.scss'

const Settings = ({
  changeLanguage, showSettingsHandler, selectValue, showBackdrop, hideBackdrop, 
}) => (
  <div>
    <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
    <div className={classes.Settings}>
      <button onClick={showSettingsHandler}>Done</button>
      <select name="lang" id="lang" onChange={changeLanguage} value={selectValue}>
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
  
  
)

export default Settings
