import React from 'react'
import PropTypes from 'prop-types'
import Backdrop from '../Backdrop/Backdrop'
import Icon from '../Icon/Icon'
import classes from './Search.module.scss'

const Search = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, getUserLocation, showBackdrop, hideBackdrop, showSearch,
}) => (
  <div className={classes.mobileOnly}>
    <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
    <div
      id="Search"
      className={classes.Search}
      style={{ 
        transform: showSearch ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: showSearch ? '1' : '0',
      }} 
    >
      <form onSubmit={onSearchFormSubmit} className={classes.form}>
        <input type="text" onChange={onInputChange} value={inputValue} className={classes.input} placeholder={text.inputPlaceholder} />
        <button className={`${classes.button} ${classes.formButton}`} type="submit">
          <Icon icon="search" viewBox="0 0 50 50" />
          <span>{text.search}</span>
        </button>
      </form>
      <button className={`${classes.button} ${classes.buttonGeo}`} type="button" onClick={getUserLocation}>
        <Icon icon="gpsArrow" viewBox="0 0 51.636 51.636" />
        <span>{text.geoFull}</span>
      </button>

    </div>
  </div>
)

export default Search

Search.propTypes = {
  onSearchFormSubmit: PropTypes.func.isRequired, 
  onInputChange: PropTypes.func.isRequired, 
  inputValue: PropTypes.string.isRequired, 
  text: PropTypes.shape({
    search: PropTypes.string,
    settings: PropTypes.string,
    forecast: PropTypes.string,
    geo: PropTypes.string,
    geoFull: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  getUserLocation: PropTypes.func.isRequired, 
  showBackdrop: PropTypes.bool.isRequired, 
  hideBackdrop: PropTypes.func.isRequired,
  showSearch: PropTypes.bool.isRequired,
}
