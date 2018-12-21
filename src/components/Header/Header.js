import React from 'react'
import propTypes from 'prop-types'
import classes from './Header.module.scss'

import Options from '../Options/Options'

const Header = ({
  text, searchValue, onSearchFormSubmit, changeLanguage, onButtonClick, onInputChange,
}) => (
  <div className={classes.container}>
    <h1 className={classes.header}>{text.title}</h1> 
    <form onSubmit={onSearchFormSubmit}>
      <input type="text" onChange={onInputChange} value={searchValue} />
      <button type="submit">{text.search}</button>
    </form>
    <Options changeLanguage={changeLanguage} />
    <button onClick={onButtonClick}>Geolocatipon</button>
  </div>
)

export default Header

Header.propTypes = {
  text: propTypes.objectOf(propTypes.string),
}