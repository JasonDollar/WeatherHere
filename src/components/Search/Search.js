import React from 'react'

import classes from './Search.module.scss'

const Search = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, showSearchHandler, getUserLocation,
}) => (
  <div className={classes.container}>
    <div className={classes.backdrop} />
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
