import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import Daily from '../../components/Daily/Daily'


let daily
let dateText
let timezone
let units
let wrapper

beforeAll(() => {
  daily = data.weather.daily
  dateText = data.text.pl.date
  timezone = data.timezone
  units = data.units.si.id
  wrapper = shallow(
    <Daily 
      daily={daily}
      dateText={dateText}
      timezone={timezone}
      units={units}
    />,
  )
})

describe('Daily component test', () => {
  test('Matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
  test('proper props given to Summary component', () => {
    const element = wrapper.find('Summary')
    expect(element.props().children).toBe(daily.summary)
  }) 
})