import React from 'react'
import Icon from '../Icon/Icon'
// import Button from '../Button/Button'
import classes from './SearchDesktop.module.scss'

const SearchDesktop = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, onSettingIconClick, getUserLocation,
}) => (
  <div className={classes.Search}>
      <form onSubmit={onSearchFormSubmit} className={classes.form}>
        <input type="text" onChange={onInputChange} value={inputValue} className={classes.input} placeholder={text.inputPlaceholder} />
        <button className={`${classes.button} ${classes.formButton}`} type="submit">
          <Icon icon="search" viewBox="0 0 50 50" />
        </button>
      </form>
      <button className={`${classes.button} ${classes.buttonGeo}`} onClick={getUserLocation}>
        <Icon icon="gpsArrow" viewBox="0 0 51.636 51.636" />
      </button>
      <button className={`${classes.button} ${classes.buttonSettings}`} onClick={onSettingIconClick}>
        <Icon icon="settings" viewBox="0 0 50 50" />
      </button>
    </div>

)

export default SearchDesktop
