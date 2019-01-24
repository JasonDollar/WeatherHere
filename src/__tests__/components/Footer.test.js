import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../components/Footer/Footer'

test('Footer to match snapshot', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper).toMatchSnapshot()
})