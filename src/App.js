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
    showWeather: true,
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  showSettingsHandler = () => {
    this.setState({
      showSettings: !this.state.showSettings,
      showSearch: false,
      showWeather: false
    })
  }

  showSearchHandler = () => {
    this.setState({
      showSearch: !this.state.showSearch,
      showSettings: false,
    })
  }
  showForecastHandler = () => {
    this.setState({
      showSettings: false,
      showSearch: false,
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
    // event used is onBlur
    const value = e.target.value
    this.setState({inputValue: value})
  }

  onSearchFormSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    // this.setState({
    //   searchValue: this.state.inputValue,
    //   showSearch: false,
    // })
    // this.setState(prevState => ({
    //   searchValue: prevState.inputValue,
    //   // inputValue: ''
    //   showSearch: false,
    // }))

    // this.onNameLocationSearch(this.state.searchValue)
  }

  render() {
    return (
      <Container>
        <Weather 
        text={this.state.localText}
        language={this.state.language}
        searchValue={this.state.inputValue}
        />

        {this.state.showSettings && (
          <Settings 
            changeLanguage={this.props.changeLanguage}
            showSettingsHandler={this.showSettingsHandler}
          />
        )}

        {this.state.showSearch && (
          <Search 
          showSearchHandler={this.showSearchHandler}
          onInputChange={this.onInputChange}
          inputValue={this.inputValue}
          text={this.state.localText.layout}
          onSearchFormSubmit={this.onSearchFormSubmit}
          />
        )}

        {this.state.width <= 576 ? (<div className={classes.bottomBar}>
          <div
            className={classes.setting} 
            onClick={this.showSearchHandler}
          >
            Search
          </div>
          <div 
            className={classes.setting} 
            onClick={this.showForecastHandler}
          >
            Forecast
          </div>
          <div
            className={classes.setting} 
            onClick={this.showSettingsHandler}
          >
            Settings
          </div>
        </div>) : null}

      </Container>
    )
  }
}

export default App

