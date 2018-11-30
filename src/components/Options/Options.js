import React from 'react'

const Options = props => (
  <select name="lang" id="lang" onChange={props.changeLanguage} defaultValue="pl">
    <option value="pl">Polski</option>
    <option value="en">English</option>
  </select>
)

export default Options
