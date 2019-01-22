import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'
import classes from './Updated.module.scss'

const Updated = ({ updateTime, updateText, address }) => (
  <div className={classes.Updated}>
    {`${updateText}${moment(updateTime).format('D.M HH:mm')}`}
    <span>{address}</span>
  </div>
)

export default Updated

Updated.propTypes = {
  updateTime: PropTypes.number.isRequired, 
  updateText: PropTypes.string.isRequired,
  address: PropTypes.string,
}

Updated.defaultProps = {
  address: '',
}