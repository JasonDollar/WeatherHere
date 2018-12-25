import React, { Component, Fragment } from 'react'
import {pl, en} from './data/text-locale'
// import {DARK_URL, MAP_URL} from './data/url'
// import {DARK_API, MAP_API} from './data/api/api'
// import axios from 'axios'


// import classes from './App.module.scss'
import Weather from './containers/Weather/Weather'
import Layout from './containers/Layout/Layout'



class App extends Component {
  state = {
    language: 'pl', 
    localText: pl,
    inputValue: '',
    searchValue: ''
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
    e.preventDefault();
    this.setState(prevState => ({
      searchValue: prevState.inputValue,
      inputValue: ''
    }))

    // this.onNameLocationSearch(this.state.searchValue)
  }

  render() {
    return (
      <Layout 
        isLoading={this.state.isLoading}
        changeLanguage={this.changeLanguage}
        inputValue={this.state.inputValue}
        text={this.state.localText.layout}
        onInputChange={this.onInputChange}
        onSearchFormSubmit={this.onSearchFormSubmit}
      >
        <Weather 
          text={this.state.localText}
          language={this.state.language}
          searchValue={this.state.searchValue}
        />
        
      </Layout>
    )
  }
}

export default App

