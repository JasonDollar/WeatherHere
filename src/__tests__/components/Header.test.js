import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header/Header'

test('Header component matches snapshot', () => {
  const wrapper = shallow(<Header />)

  expect(toJSON(wrapper)).toMatchSnapshot() 
})