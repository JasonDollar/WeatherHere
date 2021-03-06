import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import Current from '../../components/Current/Current'



let dateNowSpy

beforeAll(() => {
  // Lock Time
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1000000)
})
describe('Current component tests', () => {
  test('Matches Snapshot', () => {
    const wrapper = shallow(
      <Current 
        currently={data.weather.currently} 
        daily={data.weather.daily} 
        currentText={data.text.pl.current} 
        dateText={data.text.pl.date}
        timezone={data.timezone} 
        locationShortName={data.locationShortName} 
        units={data.units.si.id}
      />,
    )
 
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore()
})