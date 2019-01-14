import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
import {appTestData as data} from '../../data/fixtures'
import Current from '../../components/Current/Current'

let dateNowSpy;

beforeAll(() => {
    // Lock Time
    dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1000000);
});
describe('Current component tests', () => {
  test('render Current component', () => {
    const wrapper = shallow(
      <Current 
      currently={data.weather.currently} 
      daily={data.weather.daily} 
      currentText={data.text.pl.current} 
        dateText={data.text.pl.date}
      timezone={data.timezone} 
      locationShortName={data.locationShortName} 
      units={data.units}
      />
    )
 
    expect(wrapper).toMatchSnapshot()
  })
})

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore();
});