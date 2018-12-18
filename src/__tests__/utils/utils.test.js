import moment from 'moment-timezone'

import { getTime, formatNumber } from '../../data/utils'

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



describe('getTime test', () => {
  test('should correctly process date of 1st Jan 1970 - thursday', () => {
    const result = getTime(0) // 
    const expected = {
      day: '4', // thursday
      month: '1.1', // 1st Jan
    }
    expect(result).toEqual(expected)
  })

  test('should correctly convert 1st Jan 1970 1AM - thursday to "Pacific/Auckland"(UTC +12) timezone ', () => {
    const result = getTime(3600000, 'Pacific/Auckland') // 
    const expected = {
      day: '4', // thursday
      month: '1.1', // 1st Jan
    }
    expect(result).toEqual(expected)
  })

  test('should correctly convert 1st Jan 1970 1PM - thursday to "Pacific/Auckland"(UTC +12) timezone ', () => {
    const result = getTime(43200000, 'Pacific/Auckland') // 
    const expected = {
      day: '5', // friday
      month: '2.1', // 2nd Jan
    }
    expect(result).toEqual(expected)
  })
  
  test('should correctly convert 1st Jan 1970 1PM - thursday to "America/Anchorage"(UTC -9) timezone ', () => {
    const result = getTime(43200000, 'America/Anchorage') // 
    const expected = {
      day: '4', // thursday
      month: '1.1', // 1st Jan
    }
    expect(result).toEqual(expected)
  })

  test('should correctly convert 1st Jan 1970 0AM - thursday to "America/Anchorage"(UTC -9) timezone ', () => {
    const result = getTime(0, 'America/Anchorage') // 
    const expected = {
      day: '3', // wednsday
      month: '31.12', // 31st Dec
    }
    expect(result).toEqual(expected)
  })
})
