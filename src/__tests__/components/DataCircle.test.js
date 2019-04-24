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
let text = data.text.pl.current
let wrapper



describe('DataCircle test', () => {
  describe('DataCircle comp. with humidity data (works for most types)', () => {
    beforeAll(() => {

      global.document.documentElement.style.setProperty = jest.fn()
      wrapper = shallow(
        <DataCircle 
          type={typeHumidity}
          data={dataHumidity}
          unit={unitPercent}
          text={text}
        />,
      )
    })
    
    test('Data Circle humidity snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('rendered proper data', () => {
      const element = wrapper.find('.dataContainer span').at(0)
      expect(element.render().text()).toBe(`${dataHumidity}${unitPercent}`)
    })
    test('rendered proper data type', () => {
      const element = wrapper.find('.dataContainer span').at(1)
      expect(element.render().text()).toBe(typeHumidity)
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
          text={text}
        />,
      )
    })
    
    test('Data Circle wind snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    test('rendered proper data', () => {
      const element = wrapper.find('.dataContainer span').at(0)
      expect(element.render().text()).toBe(`${dataWind}${unitWind}`)
    })
    test('rendered proper data type', () => {
      const element = wrapper.find('.dataContainer span').at(1)
      expect(element.render().text()).toBe(typeWind)
    })
    test('additionaldata should be used to apply rotate to arrow element', () => {
      const element = wrapper.find('.bigArrow')
      expect(element.prop('style')).toEqual({ transform: `rotate(${additionalData - 90}deg)` })
    })
  })
})

/*
21: "--s-right-rotate1"
​
22: "--s-right-color1"
​
23: "--s-left-rotate1"
​
24: "--s-left-color1"
​
25: "--s-right-color2"
​
26: "--s-right-rotate2"
​
27: "--s-left-color2"
​
28: "--s-left-rotate2"
​
29: "--s-right-color3"
​
30: "--s-right-rotate3"
​
31: "--s-left-color3"
​
32: "--s-left-rotate3"
*/