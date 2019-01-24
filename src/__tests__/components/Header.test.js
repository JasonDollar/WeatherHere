import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header/Header'

test('Header component matches snapshot', () => {
  const wrapper = shallow(<Header />)

  expect(wrapper).toMatchSnapshot() 
})