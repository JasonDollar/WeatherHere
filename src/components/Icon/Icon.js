import React from 'react'
import PropTypes from 'prop-types'

import icons from '../../data/icons'

const Icon = ({ icon, viewBox, title }) => (
  <svg viewBox={viewBox} aria-labelledby="iconTitle" role="img">
    <title id="iconTitle">{title}</title>
    <path d={icons[icon]} />
  </svg>
)

export default Icon

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'icon',
}