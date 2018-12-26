import React, { Component } from 'react';
// import {pl, en} from '../../data/text-locale'
import {DARK_URL, MAP_URL} from '../../data/url'
import {DARK_API, MAP_API} from '../../data/api/api'
import axios from 'axios'
import styled from 'styled-components'

import classes from './Weather.module.scss'

// import Header from '../../components/Header/Header'
// import Options from './components/Options/Options'
import Current from '../../components/Current/Current'
import Daily from '../../components/Daily/Daily'
// import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'
import Hourly from '../../components/Hourly/Hourly'

const Container = styled.div`
  color: #111;
  background-color: #fefefe;
`

class Weather extends Component {
  
  state = {
    location: {
      lat: null,
      long: null,
    },
    forecast: '',
    geoForbidden: false,
    locationShortName: '',
    error: '',
    isLoading: true,
    // language: 'pl', 
    // localText: pl,
    searchValue: '',
  }
  

  componentDidMount() {
    const locationShortName = localStorage.getItem('locationName')
    const location = JSON.parse(localStorage.getItem('locationCoords'))
    console.log(location)
    if (location) {
      this.setState({
        location,
      })
      this.getWeather(location.lat, location.long, this.props.language)
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

  componentDidUpdate(prevProps) {
    if (prevProps.language !== this.props.language || prevProps.location !== this.props.location) {
      this.getWeather(this.props.location.lat, this.props.location.long, this.props.language)
    } 
    if (prevProps.searchValue !== this.props.searchValue) {
      this.onNameLocationSearch(this.props.searchValue)
    }
  }
  
  // getUserLocation = () => {
  //   this.setState({isLoading: true})
    
  //     navigator.geolocation.getCurrentPosition(position => {
  //       const {longitude, latitude} = position.coords
  //       const location = {
  //         lat: latitude,
  //         long: longitude
  //       }
  //       localStorage.setItem('locationCoords', JSON.stringify(location))
  //       this.setState({
  //         location
  //       })

  //     this.getWeather(latitude, longitude, this.props.language)
  //     }, error => {
  //       this.setState({geoForbidden: true})
  //     })  
  // }

  searchLocationName = (data) => {
    this.setState({
      locationShortName: '',
    })
    let shortName = ''

    const placeNames = data.results

    for(let i = 0; i < placeNames.length; i++) {
      for(let j = 0; j < placeNames[i].address_components.length; j++) {
        if (placeNames[i].address_components[j].types.includes("locality")) {
          shortName = placeNames[i].address_components[j].short_name
          break
        }
      }
    }
    if (shortName) {
      localStorage.setItem('locationName', shortName)
      this.setState({
        locationShortName: shortName,
      }) 
    }
  }

  getWeather = (lat, long, lang) => {
    this.setState({isLoading: true})
    // returns all places for given location 
    axios.post(`${MAP_URL}?latlng=${lat},${long}&key=${MAP_API}&language=${lang}`)
      .then(resp => resp.data)
      .then(data => {
        this.searchLocationName(data)
      })
      .catch(error => this.setState({error: error.message}))

    axios.get(`https://cors-anywhere.herokuapp.com/${DARK_URL}${DARK_API}/${lat},${long}?lang=${lang}&units=si`, {
      method: 'HEAD',
      mode: 'no-cors',
    })
      .then(resp => {
        this.setState({
        forecast: resp.data,
        isLoading: false,
        error: '',
      })})
      .catch(error => this.setState({error: error.message}))
  }


  // changeLanguage = (e) => {
  //   const value = e.target.value
  //   if (value === 'pl') {
  //     this.setState({
  //       language: value,
  //       localText: pl
  //     })
  //   } else if (value === 'en') {
  //     this.setState({
  //       language: value,
  //       localText: en
  //     })
  //   }
  //   const {lat, long} = this.state.location
  //   this.getWeather(lat, long, value)
  // }

  // onInputChange = e => {
  //   const value = e.target.value
  //   this.setState({searchValue: value})
  // }

  onNameLocationSearch = (location) => {
    axios.post(`${MAP_URL}?address=${location}&key=${MAP_API}`)
      .then(resp => {
        this.setState({isLoading: true})
        return resp.data.results[0].geometry.location
      })
      .then(data => {
        const location = {
          lat: data.lat,
          long: data.lng
        }
        localStorage.setItem('locationCoords', JSON.stringify(location))
        this.setState({
          location,
          searchValue: '',
        })
        this.getWeather(data.lat, data.lng, this.props.language)
      })
      .catch(error => this.setState({error: error.message}))
  }

  // onSearchFormSubmit = (e) => {
  //   e.preventDefault();
  //   this.onNameLocationSearch(this.state.searchValue)
  // }

  render() {
    return (
      <Container>

        
        
        {
          this.state.geoForbidden && !this.state.location ? <div>Not working</div> :
          (!this.state.forecast || this.state.isLoading ? <Spinner /> : 
            <div className={classes.container}>
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
            />
            <Hourly 
              hourly={this.state.forecast.hourly}
              hourlyText={this.props.text.hourly}
              timezone={this.state.forecast.timezone}
            />
            </div>
          )
        }

      </Container>
    );
  }
}

export default Weather;