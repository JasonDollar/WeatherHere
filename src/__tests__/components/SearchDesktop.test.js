import React from 'react'
import { shallow } from 'enzyme'
import { appTestData as data } from '../../data/fixtures'
import SearchDesktop from '../../components/SearchDesktop/SearchDesktop'

const testProps = {
  onSearchFormSubmit: jest.fn(),
  onInputChange: jest.fn(),
  inputValue: '',
  text: data.text.pl.layout,
  getUserLocation: jest.fn(),
  onSettingIconClick: jest.fn(),
}
let wrapper

beforeAll(() => {
  wrapper = shallow(<SearchDesktop {...testProps} />)
})

describe('SearchDesktop component tests', () => {
  test('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('simulate input change', () => {
    const payload = { target: 'City name' }
    const element = wrapper.find('input')
    element.simulate('change', payload)
    expect(testProps.onInputChange).toHaveBeenCalledTimes(1)
    expect(testProps.onInputChange).toHaveBeenLastCalledWith(payload)
  })

  test('geolocation button click', () => {
    const element = wrapper.find('.buttonGeo')
    element.simulate('click')
    expect(testProps.getUserLocation).toHaveBeenCalledTimes(1)
  })

  test('simulate form submition', () => {
    // const payload = { target: 'City name' }
    const element = wrapper.find('form')
    element.simulate('submit', { preventDefault: () => { } })
    expect(testProps.onSearchFormSubmit).toHaveBeenCalledTimes(1)
  })
})