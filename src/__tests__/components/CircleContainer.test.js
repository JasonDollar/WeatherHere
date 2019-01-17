import React from 'react'
import { shallow } from 'enzyme'
import { appTestData as data } from '../../data/fixtures'
import CircleContainer from '../../components/CircleContainer/CircleContainer' 

let currentText 
let currently 
let units
let wrapper

beforeAll(() => {
  currentText = data.text.pl.current
  currently = data.weather.currently
  units = data.units.si.id
  wrapper = shallow(
    <CircleContainer 
      currentText={currentText}
      currently={currently}
      units={units}
    />,
  )
})

test('CircleContainer match to Snapshot', () => {
  expect(wrapper).toMatchSnapshot()
})