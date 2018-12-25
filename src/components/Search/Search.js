import React from 'react'

import classes from './Search.module.scss'

const Search = ({ 
  onSearchFormSubmit, onInputChange, inputValue, text, showSearchHandler,
}) => (
  <div className={classes.Search}>
    <button onClick={showSearchHandler}>Done</button>
    <form onSubmit={onSearchFormSubmit}>
      <input type="text" onChange={onInputChange} value={inputValue} />
      <button type="submit">{text.search}</button>
    </form>
  </div>
)

export default Search
