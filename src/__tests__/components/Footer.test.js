import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import Footer from '../../components/Footer/Footer'

test ('render footer', () => {
  const wrapper= (<Footer />)
  expect(wrapper).toMatchSnapshot()
})