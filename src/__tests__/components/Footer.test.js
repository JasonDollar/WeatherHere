import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Footer from '../../components/Footer/Footer'

test('Footer to match snapshot', () => {
  const wrapper = shallow(<Footer />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})