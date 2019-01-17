import React from 'react'
import { shallow } from 'enzyme'
import { appTestData as data } from '../../data/fixtures'
import DataCircle from '../../components/CircleContainer/DataCircle/DataCircle' 
import { formatNumber } from '../../data/utils'

let typeHumidity = data.text.pl.current.humidity
let typeWind = data.text.pl.current.wind
let dataHumidity = formatNumber(data.weather.currently.humidity * 100)
let dataWind = formatNumber(data.weather.currently.windSpeed)
let unitPercent = '%'
let unitWind = 'm/s'
let additionalData = data.weather.currently.windBearing
let wrapper



describe('DataCircle test', () => {
  describe('DataCircle comp. with humidity data (works for most types)', () => {
    beforeAll(() => {
      wrapper = shallow(
        <DataCircle 
          type={typeHumidity}
          data={dataHumidity}
          unit={unitPercent}
        />,
      )
    })
    
    test('Data Circle humidity snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('rendered proper data', () => {
      const element = wrapper.find('.dataContainer span').at(0)
      expect(element.text()).toBe(`${dataHumidity}${unitPercent}`)
    })
    test('rendered proper data type', () => {
      const element = wrapper.find('.dataContainer span').at(1)
      expect(element.text()).toBe(typeHumidity)
    })
  })
  describe('DataCircle comp. with wind data', () => {
    beforeAll(() => {
      wrapper = shallow(
        <DataCircle 
          type={typeWind}
          data={dataWind}
          unit={unitWind}
          additionalData={additionalData}
        />,
      )
    })
    
    test('Data Circle wind snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('rendered proper data', () => {
      const element = wrapper.find('.dataContainer span').at(0)
      expect(element.text()).toBe(`${dataWind}${unitWind}`)
    })
    test('rendered proper data type', () => {
      const element = wrapper.find('.dataContainer span').at(1)
      expect(element.text()).toBe(typeWind)
    })
    test('additionaldata should be used to apply rotate to arrow element', () => {
      const element = wrapper.find('.bigArrow')
      expect(element.prop('style')).toEqual({ transform: `rotate(${additionalData - 90}deg)` })
    })
  })
})

