import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {DARK_URL, MAP_URL} from '../../data/url'
import {DARK_API, MAP_API} from '../../data/api/api'
import axios from 'axios'
import classes from './Weather.module.scss'

import Current from '../../components/Current/Current'
import Daily from '../../components/Daily/Daily'
import Spinner from '../../components/Spinner/Spinner'
import Hourly from '../../components/Hourly/Hourly'
import Updated from '../../components/Updated/Updated'
import ScreenMessage from '../../components/ScreenMessage/ScreenMessage'


class Weather extends Component {
  
  state = {
    forecast: '',
    locationShortName: '',
    error: '',
    isLoading: true,
    updateTime: null,
    address: '',
  }

  componentDidMount() {
    this.parseDataFromLocalStorage()
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.language !== this.props.language)
      || (prevProps.location !== this.props.location) 
      || (prevProps.units !== this.props.units)) 
    {
      this.setState({error: '', isLoading: true})
      this.getWeather(this.props.location.lat, this.props.location.long, this.props.language, this.props.units)
    } 
    if (prevProps.searchValue !== this.props.searchValue && this.props.searchValue !== '') {
      this.setState({error: '', isLoading: true}) 
      this.onNameLocationSearch(this.props.searchValue)
    }
 
  }

  parseDataFromLocalStorage = () => {
    const locationShortName = localStorage.getItem('locationName')
    const location = JSON.parse(localStorage.getItem('locationCoords'))
    if (location) {
      //required to initialize app and search saved location
      this.props.setLocationCoordsToState(location)
      // this.getWeather(location.lat, location.long, this.props.language, this.props.units)
    }
    else if (locationShortName) {
      this.setState({
        locationShortName,
      })
      this.onNameLocationSearch(locationShortName)
    } else {
      this.setState({
        locationShortName: ''
      })
    }
  }

  searchLocationName = (data) => {
    this.setState({
      locationShortName: '',
    })
    let shortName = ''
    let longName = ''

    const placeNames = data.results
    
    console.log(placeNames[0])

    // for(let i = 0; i < placeNames.length; i++) {
    //   for(let j = 0; j < placeNames[i].address_components.length; j++) {
    //     if (placeNames[i].address_components[j].types.includes("locality")) {
    //       shortName = placeNames[i].address_components[j].short_name
    //       longName = placeNames[i].address_components[j].long_name
    //       break
    //     }
    //   }
    // }
    for(let i = 0; i < placeNames[0].address_components.length; i++) {
        if (placeNames[0].address_components[i].types.includes("locality")) {
          shortName = placeNames[0].address_components[i].short_name
          longName = placeNames[0].address_components[i].long_name
          break
      }
    }
    if (shortName) {
      localStorage.setItem('locationName', shortName)
      this.setState({
        address: placeNames[0].formatted_address,
        locationShortName: shortName.length < 5 ? longName : shortName,
      }) 
    }
  }

  getWeather = (lat, long, lang, units) => {
    // returns all places names for given location 
    axios.post(`${MAP_URL}?latlng=${lat},${long}&key=${MAP_API}&language=${lang}`)
      .then(res => res.data)
      .then(data => {
        this.searchLocationName(data)
      })
      .catch(error => this.setState({error: error.message}))

    axios.get(`https://cors-anywhere.herokuapp.com/${DARK_URL}${DARK_API}/${lat},${long}?lang=${lang}&units=${units}`, {
      method: 'HEAD',
      mode: 'no-cors',
    })
      .then(res => {
        this.setState({
        forecast: res.data,
        isLoading: false,
        error: '',
        updateTime: Date.now(),
      })
      
    })
      .catch(error => this.setState({error: error.message}))
  }

  onNameLocationSearch = (location) => {
    axios.post(`${MAP_URL}?address=${location}&key=${MAP_API}`)
      .then(res => {
        return res.data.results[0].geometry.location
      })
      .then(data => {
        const location = {
          lat: data.lat,
          long: data.lng
        }
        this.props.setLocationCoordsToState(location)
        localStorage.setItem('locationCoords', JSON.stringify(location))
      })
      .catch(error => this.setState({error: error.message}))
  }



  render() {
    let component 
    if (this.state.error) {
      component = <ScreenMessage>{this.state.error}</ScreenMessage>
    } else if (!this.state.locationShortName && !this.state.location) {
      component =  <ScreenMessage>{this.props.text.welcome}</ScreenMessage>
    } else if (this.state.geoForbidden && !this.state.location) {
      component =  <ScreenMessage>Not working</ScreenMessage>
    } else if (!this.state.forecast || this.state.isLoading || !this.props.language) {
      component = <Spinner />
    } else {
      component = (
        <Fragment>
          <Current 
            currently={this.state.forecast.currently}
            currentText={this.props.text.current}
            daily={this.state.forecast.daily}
            units={this.state.forecast.flags.units}
            dateText={this.props.text.date}
            timezone={this.state.forecast.timezone}
            locationShortName={this.state.locationShortName}
            
          />
          <Daily 
            daily={this.state.forecast.daily}
            dateText={this.props.text.date}
            timezone={this.state.forecast.timezone}
            units={this.state.forecast.flags.units}
          />
          <Hourly 
            hourly={this.state.forecast.hourly}
            hourlyText={this.props.text.hourly}
            timezone={this.state.forecast.timezone}
            units={this.state.forecast.flags.units}
          />
          <Updated 
            updateTime={this.state.updateTime}
            updateText={this.props.text.update}
            address={this.state.address}
          />
        </Fragment>
      )
    }
    return (
      <main className={classes.container}>
        { component }
      </main>
    );
  }
}

export default Weather;

Weather.propTypes = {
  text: PropTypes.objectOf(PropTypes.shape({
    current: PropTypes.objectOf(PropTypes.string),
    date: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ])),
    hourly: PropTypes.string,
    id: PropTypes.string,
    layout: PropTypes.string,
    name: PropTypes.string,
    settings: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ])),
    update: PropTypes.string,
  })).isRequired,
  language: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.number),
  ]),
  setLocationCoordsToState: PropTypes.func.isRequired,
  units: PropTypes.string.isRequired,

}