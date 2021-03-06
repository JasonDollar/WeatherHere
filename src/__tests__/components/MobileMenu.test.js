import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import MobileMenu from '../../components/MobileMenu/MobileMenu'

const testProps = {
  text: data.text.pl.layout,
  showForecastHandler: jest.fn(),
  showSearchHandler: jest.fn(),
  showSettingsHandler: jest.fn(),
  activeMenuClass: 'forecast',
}
let wrapper

beforeEach(() => {
  wrapper = shallow(<MobileMenu {...testProps} />)
})

describe('MobileMenu test', () => {
  test('Matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test('should handle search button click', () => {
    const element = wrapper.find('button').at(0)
    element.simulate('click')
    expect(testProps.showSearchHandler).toHaveBeenCalledTimes(1)
    // using css-modules 
    // expect(element.render().hasClass('search')).toEqual(true)
  })

  test('should handle forecast button click', () => {
    const element = wrapper.find('button').at(1)
    element.simulate('click')
    expect(testProps.showForecastHandler).toHaveBeenCalledTimes(1)
    
  })

  test('should handle settings button click', () => {
    const element = wrapper.find('button').at(2)
    element.simulate('click')
    expect(testProps.showSettingsHandler).toHaveBeenCalledTimes(1)
    
  })
})