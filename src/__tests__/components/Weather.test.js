import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import Weather from '../../containers/Weather/Weather'

const testProps = {
  text: data.text.pl,
  language: data.language,
  searchValue: '',
  location: data.coordinates,
  setLocationCoordsToState: jest.fn(),
  units: data.units.si.id,
}

let wrapper

describe('Weather container', () => {
  test('renders component', () => {
    wrapper = <Weather {...testProps} />
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

})