import moment from 'moment-timezone'

const getTimeFromSeconds = (timestamp, timezone) => {
  const timestampInMiliSec = timestamp * 1000
  if (timezone === null) {
    return {
      month: moment(timestampInMiliSec).format('D.M'),
      // day === week day
      day: moment(timestampInMiliSec).format('e'),
      
      hour: moment.tz(timestampInMiliSec, timezone).format('HH:mm'),
      
    } 
  }
  return {
    month: moment.tz(timestampInMiliSec, timezone).format('D.M'),
    // day === week day
    day: moment.tz(timestampInMiliSec, timezone).format('d'),
    hour: moment.tz(timestampInMiliSec, timezone).format('HH:mm'),
  } 
}

const formatNumber = number => Math.floor(number * 10) / 10


export { getTimeFromSeconds, formatNumber }