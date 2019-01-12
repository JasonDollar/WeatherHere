import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon'
import classes from './SearchDesktop.module.scss'

const SearchDesktop = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, onSettingIconClick, getUserLocation,
}) => (
  <div className={classes.Search}>
      <form onSubmit={onSearchFormSubmit} className={classes.form}>
        <input type="text" onChange={onInputChange} value={inputValue} className={classes.input} placeholder={text.inputPlaceholder} />
        <button className={`${classes.button} ${classes.formButton}`} type="submit">
          <Icon icon="search" viewBox="0 0 50 50" />
          <span>{text.search}</span>
          
        </button>
      </form>
      <button className={`${classes.button} ${classes.buttonGeo}`} onClick={getUserLocation}>
        <Icon icon="gpsArrow" viewBox="0 0 51.636 51.636" />
        <span>{text.geo}</span>
        
      </button>
      <button className={`${classes.button} ${classes.buttonSettings}`} onClick={onSettingIconClick}>
        <Icon icon="settings" viewBox="0 0 50 50" />
        <span>{text.settings}</span>
        
      </button>
    </div>

)

export default SearchDesktop

SearchDesktop.propTypes = {
  onSearchFormSubmit: PropTypes.func.isRequired, 
  onInputChange: PropTypes.func.isRequired, 
  inputValue: PropTypes.string.isRequired, 
  text: PropTypes.objectOf(PropTypes.string), 
  getUserLocation: PropTypes.func.isRequired, 
}