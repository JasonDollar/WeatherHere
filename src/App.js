import React, { Component } from 'react'
import language from './data/text-locale'
import layouts from './data/layouts'

import classes from './App.module.scss'
import Weather from './containers/Weather/Weather'
import Settings from './components/Settings/Settings'
import Search from './components/Search/Search'
import SearchDesktop from './components/SearchDesktop/SearchDesktop'
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'



class App extends Component {
  state = {
    language: 'pl', 
    localText: language.pl,
    inputValue: '',
    searchValue: '',
    showSettings: false,
    showSearch: false,
    showBackdrop: false,
    location: '',
    activeMenuBarClass: 'forecast',
    themeName: 'pink',
    units: 'si',
  }
  componentDidMount() {
    this.setLayout()
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.parseDataFromLocalStorage()
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight,
      //fixed scrolling bug when component dissapeared on ios
      showSearch: window.innerWidth <= 576 ? this.state.showSearch : false, 
    });
    document.documentElement.style.setProperty('--screen-width', `${window.innerWidth}px`)
    document.documentElement.style.setProperty('--screen-height', `${window.innerHeight}px`)
  }

  setLocationCoordsToState = (location) => {
    this.setState({
      location,
      activeMenuBarClass: 'forecast',
      showSearch: false,
      showBackdrop: false,
    })
  } 

  parseDataFromLocalStorage = () => {
    const themeName = localStorage.getItem('theme')
    const units = localStorage.getItem('units')
    const languageLs = localStorage.getItem('language')
    if (themeName) {
      this.setState({ themeName })
      this.setLayout(themeName)
    } else {
      this.setLayout()
      this.setState({ themeName: 'pink' })
    }
    if (units) {

      this.setState({ units })
    } 
    if (languageLs) {
      this.setState({language: languageLs, localText: language[languageLs]})
      document.documentElement.lang = languageLs
    } else {
      document.documentElement.lang = 'pl'
    }
  }

  themeListHandler = e => {
    const themeName = e.target.value
    this.setState({ themeName })
    this.setLayout(themeName)
    
    localStorage.setItem('theme', themeName)
  }

  unitListHandler = e => {
    const units = e.target.value
    this.setState({ units })
    localStorage.setItem('units', units)
  }

  setLayout = (themeName = 'pink') => {
    let theme = layouts[themeName]
    
    document.documentElement.style.setProperty('--color-primary', theme.primary)
    document.documentElement.style.setProperty('--color-primary-offset', theme.primaryOffset)
    document.documentElement.style.setProperty('--color-mobile-menu', theme.mobileMenu)
    document.documentElement.style.setProperty('--color-anti-graph', theme.antiGraph)
    document.documentElement.style.setProperty('--color-secondary-graph', theme.secondaryGraph)
    document.documentElement.style.setProperty('--color-back', theme.background)
    document.documentElement.style.setProperty('--color-back2', theme.background2)
    document.documentElement.style.setProperty('--color-back-mobile', theme.backgroundMobile)
    document.documentElement.style.setProperty('--color-text-primary', theme.text)
    document.documentElement.style.setProperty('--color-text-secondary', theme.textSecondary)
    document.documentElement.style.setProperty('--color-text-transparent', theme.textTransparent)
    document.documentElement.style.setProperty('--color-border', theme.border)
    document.documentElement.style.setProperty('--color-border-transparent', theme.borderTransparent)
    document.documentElement.style.setProperty('--color-box-shadow', theme.boxShadow)
    document.documentElement.style.setProperty('--color-grey-1', theme.grey1)
    document.documentElement.style.setProperty('--color-grey-2', theme.grey2)
    document.documentElement.style.setProperty('--color-grey-3', theme.grey3)
    document.documentElement.style.setProperty('--color-grey-graph', theme.greyGraph)
  }


  getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const {longitude, latitude} = position.coords
      const location = {
        lat: latitude,
        long: longitude
      }
      localStorage.setItem('locationCoords', JSON.stringify(location))
      this.setLocationCoordsToState(location)
    })
  }

  showSettingsHandler = () => {
    let backdropVisibility
    if ((this.state.showBackdrop && !this.state.showSettings) || (!this.state.showBackdrop && !this.state.showSettings)) {
      backdropVisibility = true
    } else {
      backdropVisibility = false
    }
    this.setState({
      showSettings: !this.state.showSettings,
      showSearch:  false,
      showBackdrop: backdropVisibility,
      activeMenuBarClass: this.state.activeMenuBarClass !== 'settings' ? 'settings' : 'forecast'
    })
  }

  showSearchHandler = () => {
    let backdropVisibility
    if ((this.state.showBackdrop && !this.state.showSearch) || (!this.state.showBackdrop && !this.state.showSearch)) {
      backdropVisibility = true
    } else {
      backdropVisibility = false
    }
    this.setState({
      showSearch: !this.state.showSearch,
      showSettings: false,
      showBackdrop: this.state.width <= 576 ? backdropVisibility : false,
      activeMenuBarClass: this.state.activeMenuBarClass !== 'search' ? 'search' : 'forecast'
    })
  }
  showForecastHandler = () => {
    this.setState({
      showSettings: false,
      showSearch: false,
      showBackdrop: false,
      activeMenuBarClass: 'forecast'
    })
  }


  changeLanguage = (e) => {
    const value = e.target.value
    if (value === 'pl') {
      this.setState({
        language: value,
        localText: language.pl
      })
    } else if (value === 'en') {
      this.setState({
        language: value,
        localText: language.en
      })
    }
    localStorage.setItem('language', value)
  }

  onInputChange = e => {
    const value = e.target.value
    this.setState({ inputValue: value })
  }

  onSearchFormSubmit = (e) => {
    e.preventDefault();
    const searchValue = this.state.inputValue
    this.setState({
      searchValue: searchValue,
      showSearch: false,
      showBackdrop: false,
      inputValue: '',
      activeMenuBarClass: 'forecast',
    })
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.headerBar}>
          <div className={classes.container}>
            <Header />
            {this.state.width > 576 && <SearchDesktop 
              showSearchHandler={this.showSearchHandler}
              onInputChange={this.onInputChange}
              inputValue={this.state.inputValue}
              text={this.state.localText.layout}
              onSearchFormSubmit={this.onSearchFormSubmit}
              getUserLocation={this.getUserLocation}
              onSettingIconClick={this.showSettingsHandler}
            />}

          </div>
        </div>
        {this.state.width <= 576 && (
          <Search    
          showSearch={this.state.showSearch}
          showSearchHandler={this.showSearchHandler}
          onInputChange={this.onInputChange}
          inputValue={this.state.inputValue}
          text={this.state.localText.layout}
          onSearchFormSubmit={this.onSearchFormSubmit}
          getUserLocation={this.getUserLocation}
          showBackdrop={this.state.showBackdrop}
          hideBackdrop={this.showForecastHandler}
          />
        )}

        <Weather 
          text={this.state.localText}
          language={this.state.language}
          searchValue={this.state.searchValue}
          location={this.state.location}
          setLocationCoordsToState={this.setLocationCoordsToState}
          units={this.state.units}
        />

        
        <Settings 
          showSettings={this.state.showSettings}
          changeLanguage={this.changeLanguage}
          showSettingsHandler={this.showSettingsHandler}
          selectedLanguage={this.state.language}
          showBackdrop={this.state.showBackdrop}
          hideBackdrop={this.showForecastHandler}
          languageNames={Object.keys(language).map(item => ({
            name: language[item].name,
            id: language[item].id
          }))}
          themeName={this.state.themeName}
          themeListHandler={this.themeListHandler}
          text={this.state.localText.settings}
          unitListHandler={this.unitListHandler}
          units={this.state.units}
        />
        

 

        {this.state.width <= 576 ? (
          <MobileMenu 
            text={this.state.localText.layout}
            activeMenuClass={this.state.activeMenuBarClass}
            showForecastHandler={this.showForecastHandler}
            showSearchHandler={this.showSearchHandler}
            showSettingsHandler={this.showSettingsHandler}
          />
        ) : null}



      </div>
    )
  }
}

export default App

