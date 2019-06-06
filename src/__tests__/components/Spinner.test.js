import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import Spinner from '../../components/Spinner/Spinner'

test('Spinner matches snapshot', () => {
  const wrapper = shallow(<Spinner />)

  expect(toJSON(wrapper)).toMatchSnapshot() 
})