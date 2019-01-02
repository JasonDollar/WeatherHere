import React, { Component } from 'react'
import {pl, en} from './data/text-locale'
import layout from './data/layouts'
// import styled from 'styled-components'

import classes from './App.module.scss'
import Weather from './containers/Weather/Weather'
import Settings from './components/Settings/Settings'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Icon from './components/Icon/Icon'

// const Container = styled.div`
// color: #111;
// background-color: #fefefe;
// `

class App extends Component {
  state = {
    language: 'pl', 
    localText: pl,
    inputValue: '',
    searchValue: '',
    showSettings: false,
    showSearch: false,
    showBackdrop: false,
    location: null,
    activeMenuBarClass: 'forecast',
    weatherIcon: 'clear-day',
  }
  componentDidMount() {
    this.setLayout()
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight,
      showSearch: window.innerWidth <= 576 ? false : true, 
    });
    document.documentElement.style.setProperty('--screen-width', `${window.innerWidth}px`)
    document.documentElement.style.setProperty('--screen-height', `${window.innerHeight}px`)
  }

  setLocationCoordsToState = (location) => {
    this.setState({
      location,
      showSearch: this.state.width <= 576 ? false : true,
      activeMenuBarClass: 'forecast',
    })
  } 

  setWeatherIcon = (icon) => {
    this.setState({
      weatherIcon: icon,
    })
  }

  setLayout = (themeName = 'pink') => {
    const theme = layout[themeName]
    document.documentElement.style.setProperty('--color-primary', theme.primary)
    document.documentElement.style.setProperty('--color-primary-offset', theme.primaryOffset)
    document.documentElement.style.setProperty('--color-anti-graph', theme.antiGraph)
    document.documentElement.style.setProperty('--color-secondary-graph', theme.secondaryGraph)
    document.documentElement.style.setProperty('--color-back', theme.background)
    document.documentElement.style.setProperty('--color-text-primary', theme.text)
    document.documentElement.style.setProperty('--color-text-secondary', theme.textSecondary)
    document.documentElement.style.setProperty('--color-text-transparent', theme.textTransparent)
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

  // disableScroll = () => { document.body.style.overflow = 'hidden' }

  showSettingsHandler = () => {
    let backdropVisibility
    if ((this.state.showBackdrop && !this.state.showSettings) || (!this.state.showBackdrop && !this.state.showSettings)) {
      backdropVisibility = true
    } else {
      backdropVisibility = false
    }
    this.setState({
      showSettings: !this.state.showSettings,
      showSearch:  this.state.width <= 576 ? false : true,
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
      showSearch: this.state.width <= 576 ? false : true,
      showBackdrop: false,
      activeMenuBarClass: 'forecast'
    })
  }



  changeLanguage = (e) => {
    const value = e.target.value
    if (value === 'pl') {
      this.setState({
        language: value,
        localText: pl
      })
    } else if (value === 'en') {
      this.setState({
        language: value,
        localText: en
      })
    }
  }

  onInputChange = e => {
    const value = e.target.value
    this.setState({inputValue: value})
  }

  onSearchFormSubmit = (e) => {
    const searchValue = this.state.inputValue
    e.preventDefault();
    this.setState({
      searchValue: searchValue,
      showSearch: this.state.width <= 576 ? false : true,
      inputValue: '',
      activeMenuBarClass: 'forecast',
    })

  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.headerBar}>
          <div className={classes.container}>
            <Header 
            text={this.state.localText.header} 
            
            />


            {this.state.showSearch && (
              <Search 
              showSearchHandler={this.showSearchHandler}
              onInputChange={this.onInputChange}
              inputValue={this.state.inputValue}
              text={this.state.localText.layout}
              onSearchFormSubmit={this.onSearchFormSubmit}
              getUserLocation={this.getUserLocation}
              showBackdrop={this.state.showBackdrop}
              hideBackdrop={this.showForecastHandler}
              disableScroll={this.disableScroll}
              onSettingIconClick={this.showSettingsHandler}
              />
            )}

          </div>
        </div>

        <Weather 
          text={this.state.localText}
          language={this.state.language}
          searchValue={this.state.searchValue}
          location={this.state.location}
          setLocationCoordsToState={this.setLocationCoordsToState}
        />

        {this.state.showSettings && (
          <Settings 
            changeLanguage={this.changeLanguage}
            showSettingsHandler={this.showSettingsHandler}
            selectValue={this.state.language}
            showBackdrop={this.state.showBackdrop}
            hideBackdrop={this.showForecastHandler}
            
          />
        )}

 

        {this.state.width <= 576 ? (<div className={classes.bottomBar}>
          <div
            className={this.state.activeMenuBarClass === 'search' ? `${classes.active} ${classes.setting}` : classes.setting} 
            onClick={this.showSearchHandler} 
          >
            <Icon icon="search" viewBox="0 0 50 50" />
            <p>{this.state.localText.layout.search}</p>
          </div>
          <div 
            className={this.state.activeMenuBarClass === 'forecast' ? `${classes.active} ${classes.setting}` : classes.setting} 
            onClick={this.showForecastHandler}
          >
            <Icon icon="sun" viewBox="0 0 50 50" />
            <p>{this.state.localText.layout.forecast}</p>
          </div>
          <div
            className={this.state.activeMenuBarClass === 'settings' ? `${classes.active} ${classes.setting}` : classes.setting} 
            onClick={this.showSettingsHandler}
          >
            <Icon icon="settings" viewBox="0 0 50 50" />
            <p>{this.state.localText.layout.settings}</p>
          </div>
        </div>) : null}

        <div className={`${classes.footerContainer} ${classes.container}`}>
          <Footer />
        </div>

      </div>
    )
  }
}

export default App

