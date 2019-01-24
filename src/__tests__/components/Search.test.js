import React from 'react'
import { shallow } from 'enzyme'
import { appTestData as data } from '../../data/fixtures'
import Search from '../../components/Search/Search'

const testProps = {
  onSearchFormSubmit: jest.fn(),
  onInputChange: jest.fn(),
  inputValue: '',
  text: data.text.pl.layout,
  getUserLocation: jest.fn(),
  showBackdrop: true,
  hideBackdrop: jest.fn(),
  showSearch: true,
}
let wrapper

beforeAll(() => {
  wrapper = shallow(<Search {...testProps} />)
})

describe('Search component tests', () => {
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