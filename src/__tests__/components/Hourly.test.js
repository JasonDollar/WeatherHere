import React from 'react'
import { shallow } from 'enzyme'
import { appTestData as data } from '../../data/fixtures'
import Hourly from '../../components/Hourly/Hourly'

let hourly
let hourlyText
let timezone
let units
let wrapper

beforeAll(() => {
  hourly = data.weather.hourly
  hourlyText = data.text.pl.date
  timezone = data.timezone
  units = data.units.si.id
  wrapper = shallow(
    <Hourly 
      hourly={hourly}
      hourlyText={hourlyText}
      timezone={timezone}
      units={units}
    />,
  )
})

describe('Hourly component test', () => {
  test('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('proper props given to Summary component', () => {
    const element = wrapper.find('Summary')
    expect(element.props().children).toBe(hourly.summary) 
  }) 
})