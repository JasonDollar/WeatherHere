import React from 'react'

import icons from '../../data/icons'

const Icon = ({ icon }) => (
  <svg viewBox="0 0 100 100">
    <path d={icons[icon]} />
  </svg>
)

export default Icon
