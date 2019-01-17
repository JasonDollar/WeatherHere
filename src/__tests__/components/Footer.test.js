import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../../components/Footer/Footer'

configure({ adapter: new Adapter() })

test('Footer to match snapshot', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper).toMatchSnapshot()
})