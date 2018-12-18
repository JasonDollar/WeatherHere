import React from 'react'
import PropTypes from 'prop-types'

import icons from '../../data/icons'

const Icon = ({ icon, viewBox }) => (
  <svg viewBox={viewBox}>
    <path d={icons[icon]} />
  </svg>
)

export default Icon

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
}