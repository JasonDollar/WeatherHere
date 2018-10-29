import React, { Component } from 'react';
import {pl, en} from './data/text-locale'
import {DARK_URL} from './data/api/url'
import {DARK_API} from './data/api/api'
import axios from 'axios'
// import getCoords from 'city-to-coords';

import Header from './components/Header/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //location could be deleted later
      location: {
        long: null,
        lat: null
      },
      forecast: {},
      geoForbidden: false,
      language: 'pl', // propably it's unnecessary
      localText: pl
    }
  }
  
  getUserLocation = () => {
    console.log(this.state.localText.header)
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const {longitude, latitude} = position.coords
        //Could be deleted proppably
        this.setState({
          location: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
        })
        //-------------------

      this.getWeather(latitude, longitude, this.state.language)
      })
      
    } else {
      this.setState({ geoForbidden: true})
    }
  }

  getWeather = (lat, long, lang) => {
    console.log(lat, long)
    axios.get(`https://cors-anywhere.herokuapp.com/${DARK_URL}${DARK_API}/${lat},${long}?lang=${lang}`, {
      method: 'HEAD',
      mode: 'no-cors',
    })
      .then(resp => {
        console.log(resp.data)
        this.setState({
        forecast: resp.data
      })})
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
    const {lat, long} = this.state.location
    this.getWeather(lat, long, value)
  }

  
  render() {
    let paragraph = (
      <React.Fragment>
        <h1>Your coordinates: </h1>
        <p>Longitude: {this.state.location.long}</p>
        <p>Latitude: {this.state.location.lat}</p>
      </React.Fragment>
    )

    if (this.state.geoForbidden) {
      paragraph = <p>You must allow geolocation!</p>
    }
    return (
      <div >
        <Header text={this.state.localText.header} />
        <select name="lang" id="lang" onChange={this.changeLanguage} defaultValue="pol" >
          <option value="pl">Polski</option>
          <option value="en">English</option>
        </select>
        <button onClick={this.getUserLocation}>Geolocatipon</button>
        {paragraph}
      </div>
    );
  }
}

export default App;
