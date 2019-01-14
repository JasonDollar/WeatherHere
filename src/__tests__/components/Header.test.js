import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import Header from '../../components/Header/Header'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)

  expect(wrapper).toMatchSnapshot() 
})