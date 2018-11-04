import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1> 

  </div>
)

export default Header

Header.propTypes = {
  text: propTypes.string,
}