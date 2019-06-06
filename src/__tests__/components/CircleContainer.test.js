import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import CircleContainer from '../../components/CircleContainer/CircleContainer' 

let currentText = data.text.pl.current
let currently = data.weather.currently
let units = data.units.si.id
let wrapper

beforeAll(() => {
  wrapper = shallow(
    <CircleContainer 
      currentText={currentText}
      currently={currently}
      units={units}
    />,
  )
})

test('CircleContainer matches Snapshot', () => {
  expect(toJSON(wrapper)).toMatchSnapshot()
})