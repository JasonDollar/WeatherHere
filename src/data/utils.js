import moment from 'moment-timezone'

const getTime = (timestamp, timezone) => {
  console.log(moment(timestamp).format('LLLL'))
  if (timezone === null) {
    return {
      month: moment(timestamp).format('D.M'),
      // day === week day
      day: moment(timestamp).format('e'),
    } 
  }
  return {
    month: moment.tz(timestamp, timezone).format('D.M'),
    // day === week day
    day: moment.tz(timestamp, timezone).format('e'),
  } 
}


export { getTime }