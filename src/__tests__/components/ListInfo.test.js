import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import ListInfo from '../../components/Current/ListInfo/ListInfo'

let currentText 
let currently 
let moonphase 
let units
let wrapper

beforeAll(() => {
  currentText = data.text.pl.current
  currently = data.weather.currently
  moonphase = 0.5
  units = data.units.si.id
  wrapper = shallow(
    <ListInfo 
      currentText={currentText}
      currently={currently}
      moonphase={moonphase}
      units={units}
    />,
  )
})

describe('ListInfo component test', () => {
  test('Matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})