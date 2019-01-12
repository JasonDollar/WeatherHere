import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Spinner from '../../components/Spinner/Spinner'
configure({ adapter: new Adapter() })


test('should render Spinner correctly', () => {
  const wrapper = shallow(<Spinner />)

  expect(wrapper).toMatchSnapshot() 
})