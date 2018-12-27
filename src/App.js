import React, { Component, Fragment } from 'react'
import {pl, en} from './data/text-locale'
import styled from 'styled-components'
// import {DARK_URL, MAP_URL} from './data/url'
// import {DARK_API, MAP_API} from './data/api/api'
// import axios from 'axios'


import classes from './App.module.scss'
import Weather from './containers/Weather/Weather'
import Settings from './components/Settings/Settings'
import Search from './components/Search/Search'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Container = styled.div`
color: #111;
background-color: #fefefe;
`

class App extends Component {
  state = {
    language: 'pl', 
    localText: pl,
    inputValue: '',
    searchValue: '',
    showSettings: false,
    showSearch: false,
    location: null,
    showBackdrop: false,
    activeMenuBarClass: 'forecast',
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  setLocationCoordsToState = (location) => {
    this.setState({
      location,
      showSearch: this.state.width <= 576 ? false : true,
    })
  } 

  
  updateWindowDimensions = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight,
      showSearch: window.innerWidth <= 576 ? false : true 
    });
    document.documentElement.style.setProperty('--screen-width', `${window.innerWidth}px`)
    document.documentElement.style.setProperty('--screen-height', `${window.innerHeight}px`)
  }

  getUserLocation = () => {
    // this.setState({isLoading: true})
    
    navigator.geolocation.getCurrentPosition(position => {
      const {longitude, latitude} = position.coords
      const location = {
        lat: latitude,
        long: longitude
      }
      localStorage.setItem('locationCoords', JSON.stringify(location))
      this.setLocationCoordsToState(location)
    })
      // this.getWeather(latitude, longitude, this.props.language)
      // }, error => {
      //   this.setState({geoForbidden: true})
      // })  
  }

  showSettingsHandler = () => {
    this.setState({
      showSettings: !this.state.showSettings,
      showSearch:  this.state.width <= 576 ? false : true,
      showBackdrop: !this.state.showBackdrop,
      activeMenuBarClass: this.state.activeMenuBarClass === ('forecast' || 'search')  ? 'settings' : 'forecast',
    })
  }

  showSearchHandler = () => {
    this.setState({
      showSearch: !this.state.showSearch,
      showSettings: false,
      showBackdrop: this.state.width <= 576 ? !this.state.showBackdrop : false,
      activeMenuBarClass: this.state.activeMenuBarClass === ('forecast' || 'settings') ? 'search' : 'forecast',
    })
  }
  showForecastHandler = () => {
    this.setState({
      showSettings: false,
      showSearch: this.state.width <= 576 ? false : true,
      showBackdrop: false,
      activeMenuBarClass: 'forecast',
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
    // console.log(e)
    e.preventDefault();
    this.setState({
      searchValue: searchValue,
      showSearch: this.state.width <= 576 ? false : true,
      inputValue: ''
    })

  }

  render() {
    return (
      <Container>
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
              />
            )}
            <div
              className={classes.settingDesktop} 
              onClick={this.showSettingsHandler}
            >
              Settings
            </div>
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
            Search
          </div>
          <div 
            className={this.state.activeMenuBarClass === 'forecast' ? `${classes.active} ${classes.setting}` : classes.setting} 
            onClick={this.showForecastHandler}
          >
            Forecast
          </div>
          <div
            className={this.state.activeMenuBarClass === 'settings' ? `${classes.active} ${classes.setting}` : classes.setting} 
            onClick={this.showSettingsHandler}
          >
            Settings
          </div>
        </div>) : null}
        <div className={`${classes.footerContainer} ${classes.container}`}>
          <Footer />
        </div>

      </Container>
    )
  }
}

export default App

