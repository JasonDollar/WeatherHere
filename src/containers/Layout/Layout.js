import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Settings from '../../components/Settings/Settings'
import Search from '../../components/Search/Search'

import classes from './Layout.module.scss'

const Container = styled.div`
color: #111;
background-color: #fefefe;
`

class Layout extends Component {
  state = {
    width: 0,
    height: 0,
    showSearch: false,
    showSettings: false
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.inputValue !== this.props.inputValue) {
      return false
    } else {
      return true
    }
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  showSettingsHandler = () => {
    this.setState({
      showSettings: !this.state.showSettings,
    })
  }

  showSearchHandler = () => {
    this.setState({
      showSearch: !this.state.showSearch,
    })
  }
  showForecastHandler = () => {
    this.setState({
      showSettings: false,
      showSearch: false,
    })
  }


  render() {
    return (
      <Container>
        {this.props.children}

        {this.state.showSettings && (
          <Settings 
            changeLanguage={this.props.changeLanguage}
            showSettingsHandler={this.showSettingsHandler}
          />
        )}

        {this.state.showSearch && (
          <Search 
          showSearchHandler={this.showSearchHandler}
          onInputChange={this.props.onInputChange}
          inputValue={this.props.inputValue}
          text={this.props.text}
          onSearchFormSubmit={this.props.onSearchFormSubmit}
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

export default Layout
