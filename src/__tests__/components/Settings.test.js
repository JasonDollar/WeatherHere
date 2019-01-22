import React from 'react'
import { shallow } from 'enzyme'
import { appTestData as data } from '../../data/fixtures'
import Settings from '../../components/Settings/Settings'

let changeLanguage; let showSettingsHandler; let selectedLanguage 
let showBackdrop; let hideBackdrop; let languageNames 
let theme; let themeListHandler; let text 
let unitListHandler; let units; let wrapper
beforeEach(() => {
  changeLanguage = jest.fn()
  showSettingsHandler = jest.fn()
  selectedLanguage = data.language
  showBackdrop = true
  hideBackdrop = jest.fn()
  languageNames = data.languageNames
  theme = data.theme
  themeListHandler = jest.fn()
  text = data.text.pl.settings
  unitListHandler = jest.fn()
  units = data.units.si
  wrapper = shallow(
    <Settings 
      showSettings={true}
      changeLanguage={changeLanguage}
      showSettingsHandler={showSettingsHandler}
      selectedLanguage={selectedLanguage}
      showBackdrop={showBackdrop}
      hideBackdrop={hideBackdrop}
      languageNames={languageNames}
      themeName={theme.name}
      themeListHandler={themeListHandler}
      text={text}
      unitListHandler={unitListHandler}
      units={units.id}
    />,
  )
})
// added Footer 
describe('Settings component tests', () => {
  test('Renders Setting components correctly', () => {
    
    expect(wrapper).toMatchSnapshot()
  })

  test('test language element render text for each language name and Icon component ', () => {
    const element = wrapper.find('.language label').at(0)
    expect(element.text()).toBe(`<Icon />${languageNames[0].name}`)
    
  })

  test('test language input funcionality ', () => {
    const payload = { value: languageNames[0].id } 
    const element = wrapper.find('.language input').at(0)
    element.simulate('change', payload)
    expect(changeLanguage).toHaveBeenLastCalledWith(payload)
    expect(element.props().value).toEqual(languageNames[0].id)
  })

  test('test theme element render text for each theme name and Icon component ', () => {
    const element = wrapper.find('.theme label').at(0)
    expect(element.text()).toBe(`<Icon />${theme.name}`)
  })

  test('test theme input functionality ', () => {
    const element = wrapper.find('.theme input').at(0)
    const payload = { value: theme.id } 
    element.simulate('change', payload)
    expect(themeListHandler).toHaveBeenLastCalledWith(payload)
    expect(element.props().value).toEqual(theme.id)
  })


  test('test unit element render text for each unit name and Icon component ', () => {
    const element = wrapper.find('.units label').at(0)
    expect(element.text()).toBe(`<Icon />${units.name}`)
    
  })

  test('test unit input functionality ', () => {
    const element = wrapper.find('.units input').at(0)
    const payload = { value: units.id } 
    element.simulate('change', payload)
    expect(unitListHandler).toHaveBeenLastCalledWith(payload)
    expect(element.props().value).toEqual(units.id)
  })
  
})