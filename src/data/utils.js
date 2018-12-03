import moment from 'moment'

const getTime = timestamp => ({
  month: moment(timestamp).format('D.M'),
  // day === week day
  day: moment(timestamp).format('e'),
})


export { getTime }