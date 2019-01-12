import React from 'react'

const ScreenMessage = ({children}) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <h1 style={style}>
      {children}
    </h1>
  )
}

export default ScreenMessage
