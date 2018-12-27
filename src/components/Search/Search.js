import React from 'react'

import Backdrop from '../Backdrop/Backdrop'
import classes from './Search.module.scss'

const Search = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, showSearchHandler, getUserLocation, showBackdrop, hideBackdrop, 
}) => (
  <div className={classes.container}>
    <Backdrop showBackdrop={showBackdrop} hideBackdrop={hideBackdrop} />
    <div className={classes.Search}>
      <form onSubmit={onSearchFormSubmit} className={classes.form}>
        <input type="text" onChange={onInputChange} value={inputValue} className={classes.input} />
        <button type="submit" className={classes.button}>{text.search}</button>
      </form>
      <button onClick={getUserLocation}>Geo</button>
    </div>
  </div>
)

export default Search
