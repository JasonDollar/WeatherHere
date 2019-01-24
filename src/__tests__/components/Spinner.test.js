import React from 'react'
import { shallow } from 'enzyme'

import Spinner from '../../components/Spinner/Spinner'

test('Spinner matches snapshot', () => {
  const wrapper = shallow(<Spinner />)

  expect(wrapper).toMatchSnapshot() 
})