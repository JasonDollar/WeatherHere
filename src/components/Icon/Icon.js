import React from 'react'

import icons from '../../data/icons'

const Icon = ({ icon, viewBox }) => (
  <svg viewBox={viewBox}>
    <path d={icons[icon]} />
  </svg>
)

export default Icon
