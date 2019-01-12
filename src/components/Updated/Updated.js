import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment-timezone'
import classes from './Updated.module.scss'

const Updated = ({ updateTime, updateText }) => (
    <div className={classes.Updated}>
      {`${updateText}${moment(updateTime).format('D.M HH:mm')}`}
    </div>
  )

export default Updated

Updated.propTypes = {
  updateTime: PropTypes.number.isRequired, 
  updateText: PropTypes.string.isRequired,
}