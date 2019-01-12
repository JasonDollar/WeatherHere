

import { getTimeFromSeconds, formatNumber, formatMoonPhase } from '../../data/utils'

describe('formatNumber test', () => {
  test('should return integer', () => {
    const result = formatNumber(10.000)
    expect(result).toBe(10)
  })

  test('should correctly format number', () => {
    const result = formatNumber(10.213214214)
    expect(result).toBe(10.2)
  })
})



describe('getTimeFromSeconds test', () => {
  test('should correctly process date of 1st Jan 1970 - thursday when there is no timezone specified', () => {
    const result = getTimeFromSeconds(0) // 
    const expected = {
      day: '4', // thursday
      month: '1.1', // 1st Jan
      hour: '00:00',
    }
    expect(result).toEqual(expected)
  })

  //""Pacific/Auckland"(UTC +12)
  // daylight saving time +13h
  // my timezone utc + 1 => +12h
  test('should correctly convert 1st Jan 1970 1AM - thursday to "Pacific/Auckland"(UTC +12) timezone ', () => {
    const result = getTimeFromSeconds(3600, 'Pacific/Auckland') // 
    const expected = {
      day: '4', // thursday
      month: '1.1', // 1st Jan
      hour: '13:00',
    }
    expect(result).toEqual(expected)
  })

  test('should correctly convert 1st Jan 1970 1PM - thursday to "Pacific/Auckland"(UTC +12) timezone ', () => {
    const result = getTimeFromSeconds(46800, 'Pacific/Auckland') // 
    const expected = {
      day: '5', // friday
      month: '2.1', // 2nd Jan
      hour: '01:00',
    }
    expect(result).toEqual(expected)
  })


  //"America/Anchorage"(UTC -9)
  // daylight saving time -8h
  // my timezone utc + 1 => -10h
  test('should correctly convert 1st Jan 1970 1PM - thursday to "America/Anchorage"(UTC -9) timezone ', () => {
    const result = getTimeFromSeconds(46800, 'America/Anchorage') // 
    const expected = {
      day: '4', // thursday
      month: '1.1', // 1st Jan
      hour: '03:00',
    }
    expect(result).toEqual(expected)
  })

  test('should correctly convert 1st Jan 1970 0AM - thursday to "America/Anchorage"(UTC -9) timezone ', () => {
    const result = getTimeFromSeconds(0, 'America/Anchorage') // 
    const expected = {
      day: '3', // wednsday
      month: '31.12', // 31st Dec
      hour: '14:00', 
    }
    expect(result).toEqual(expected)
  })
})


describe('formatMoonPhase func test', () => {
  test('should return `-` when no proper value provided', () => {
    const result = formatMoonPhase()
    const result2 = formatMoonPhase('randString')
    expect(result && result2).toBe('-')
  })  
}) 