import React from 'react'
import Icon from '../Icon/Icon'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Search.module.scss'

const Search = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, onSettingIconClick, getUserLocation, showBackdrop, hideBackdrop,
}) => (
  <div>
    <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
    <div className={classes.Search}>
      <form onSubmit={onSearchFormSubmit} className={classes.form}>
        <input type="text" onChange={onInputChange} value={inputValue} className={classes.input} placeholder={text.inputPlaceholder} />
        <button type="submit" className={classes.formButton}>
          <Icon icon="search" viewBox="0 0 50 50" />
        </button>
      </form>
      <button className={classes.geoButton} onClick={getUserLocation}>
        <Icon icon="gpsArrow" viewBox="0 0 26 26" />
      </button>
      <button
        className={classes.settingDesktop} 
        onClick={onSettingIconClick}
      >
        <Icon icon="settings" viewBox="0 0 50 50" />
      </button>
    </div>
  </div>
)

export default Search
