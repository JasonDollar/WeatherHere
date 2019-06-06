import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { appTestData as data } from '../../data/fixtures'
import MainInfo from '../../components/Current/MainInfo/MainInfo'
import { formatNumber, getTimeFromSeconds } from '../../data/utils'


let locationShortName; let currentText; let currently; let dateText; let today; let timezone; let sunPositionTime; let units
let wrapper

beforeAll(() => {
  locationShortName = data.locationShortName
  currentText = data.text.pl.current
  currently = data.weather.currently
  dateText = data.text.pl.date
  today = data.today
  timezone = data.timezone
  sunPositionTime = {
    sunrise: 1000,
    sunset: 1001,
  }
  units = data.units.si.id

  wrapper = shallow(
    <MainInfo 
      locationShortName={locationShortName}
      currentText={currentText}
      currently={currently}
      dateText={dateText}
      today={today}
      timezone={timezone}
      sunPositionTime={sunPositionTime}
      units={units}
    />,
  )
})

describe('Main Info component tests', () => {


  test('Matches snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  test('Proper city name rendered', () => {
    const element = wrapper.find('.city')
    expect(element.render().text()).toBe(locationShortName)
  })

  test('Proper temperature rendered', () => {
    const temperature = formatNumber(currently.temperature)
    const temperatureUnits = data.units.si.temperature
    const element = wrapper.find('.temperature')
    expect(element.render().text()).toBe(`${temperature}${temperatureUnits}`)
  })
  test('Proper today date rendered', () => {
    const screenReaderText = currentText.date
    const dayName = dateText.weekDay[today.day]
    const todayDate = today.month
    const element = wrapper.find('.date')
    expect(element.render().text()).toBe(`${screenReaderText} ${dayName} ${todayDate}`)
  })
  test('rendered sunrise section with proper information', () => {
    const sunrise = getTimeFromSeconds(sunPositionTime.sunrise, timezone).hour
    const sunriseText = currentText.sunrise

    const screenReaderElement = wrapper.find('.sun span').at(0)
    const sunriseElement = wrapper.find('.sun span').at(1)
    const sunriseIcon = wrapper.find('.sun Icon').at(0)

    expect(screenReaderElement.text()).toBe(sunriseText)
    expect(sunriseElement.render().text()).toBe(sunrise)
    expect(sunriseIcon.props().icon).toBe('sunrise')
  })
  test('proper sunset time rendered', () => {
    const sunset = getTimeFromSeconds(sunPositionTime.sunset, timezone).hour
    const sunsetText = currentText.sunset

    const screenReaderElement = wrapper.find('.sun span').at(2)
    const sunsetElement = wrapper.find('.sun span').at(3)
    const sunsetIcon = wrapper.find('.sun Icon').at(1)

    expect(screenReaderElement.text()).toBe(sunsetText)
    expect(sunsetElement.render().text()).toBe(sunset)
    expect(sunsetIcon.props().icon).toBe('sunset')
  })

  test('proper props given to Summary component from MainInfo comp.', () => {
    const element = wrapper.find('Summary')
    expect(element.props().children).toBe(currently.summary)
  }) 
  test('proper props icon name given to Icon component from MainInfo comp.', () => {
    const element = wrapper.find('.icon Icon')
    expect(element.props().icon).toBe(currently.icon)
  }) 
})