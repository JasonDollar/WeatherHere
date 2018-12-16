import React from 'react'
import propTypes from 'prop-types'
import classes from './Header.module.scss'

const Header = props => (
  <div className={classes.container}>
    <h1>{props.text.title}</h1> 
    <form onSubmit={props.onSearchFormSubmit}>
      <input type="text" onChange={props.onInputChange} value={props.searchValue} />
      <button>{props.text.search}</button>
    </form>
  </div>
)

export default Header

Header.propTypes = {
  text: propTypes.objectOf(propTypes.string),
}