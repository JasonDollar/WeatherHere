import moment from 'moment-timezone'

const getTimeFromSeconds = (timestamp, timezone) => {
  const timestampInMiliSec = timestamp * 1000
  if (timezone === null) {
    return {
      month: moment(timestampInMiliSec).format('D.M'),
      // day === week day
      day: moment(timestampInMiliSec).format('e'),
      
      hour: moment(timestampInMiliSec, timezone).format('HH:mm'),
      
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

const formatMoonPhase = (phase, text) => {
  if (phase <= 0.01) {
    return text[0]
  } if (phase > 0.01 && phase <= 0.24) {
    return text[1]
  } if (phase > 0.24 && phase <= 0.26) {
    return text[2]
  } if (phase > 0.26 && phase <= 0.48) {
    return text[3]
  } if (phase > 0.48 && phase <= 0.52) {
    return text[4]
  } if (phase > 0.52 && phase <= 0.74) {
    return text[5]
  } if (phase > 0.74 && phase <= 0.76) {
    return text[6]
  } else if (phase > 0.76 && phase <= 0.98) {
    return text[7]
  } else if (phase > 0.98) {
    return text[0]
  } 
  return `-`
  
}


export { getTimeFromSeconds, formatNumber, formatMoonPhase }