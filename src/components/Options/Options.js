import React from 'react'

const Options = () => (
  <select name="lang" id="lang" onChange={this.changeLanguage} defaultValue="pol">
      <option value="pl">Polski</option>
      <option value="en">English</option>
    </select>
)

export default Options
