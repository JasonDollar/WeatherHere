import React from 'react'

import icons from '../../data/icons'

const Icon = ({ icon }) => (
  <svg viewBox="0 0 100 100">
    <path x="0" y="0" width="100%" height="100%" d={icons[icon]} />
  </svg>
)

export default Icon
