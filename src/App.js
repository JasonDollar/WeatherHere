import React, { Component } from 'react';
import {pl, en} from './data/text-locale'
import {DARK_URL} from './data/url'
import {DARK_API} from './data/api/api'
import axios from 'axios'

import classes from './App.module.scss'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Current from './components/Current/Current'
import Options from './components/Options/Options'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        long: null,
        lat: null
      },
      forecast: {},
      geoForbidden: false,
      isLoading: true,
      language: 'pl', 
      localText: pl
    }
  }

  // componentDidMount() {
  //   this.getUserLocation()
  // }
  
  getUserLocation = () => {
    this.setState({isLoading: true})
    
    
      navigator.geolocation.getCurrentPosition(position => {
        const {longitude, latitude} = position.coords
        this.setState({
          location: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
        })
        //-------------------

      this.getWeather(latitude, longitude, this.state.language)
      }, error => {
        this.setState({geoForbidden: true})
      })
      
    
  }

  getWeather = (lat, long, lang) => {
    
    console.log(lat, long)
    axios.get(`https://cors-anywhere.herokuapp.com/${DARK_URL}${DARK_API}/${lat},${long}?lang=${lang}&units=si`, {
      method: 'HEAD',
      mode: 'no-cors',
    })
      .then(resp => {
        // console.log(resp.data)
        this.setState({
        forecast: resp.data,
        isLoading: false
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
    // let paragraph = (
    //   <React.Fragment>
    //     <h1>Your coordinates: </h1>
    //     <p>Longitude: {this.state.location.long}</p>
    //     <p>Latitude: {this.state.location.lat}</p>
    //   </React.Fragment>
    // )

    // if (this.state.geoForbidden) {
    //   paragraph = <p>You must allow geolocation!</p>
    // }
    
    return (
      <div className={classes.container}>
        <Header text={this.state.localText.header} />

        
        <Options changeLanguage={this.changeLanguage}/>
        <button onClick={this.getUserLocation}>Geolocatipon</button>
        

        

        {
          this.state.geoForbidden ? <div>Not working</div> :
          (!this.state.forecast || this.state.isLoading ? <div>Loading</div> : 
            <Current 
              currently={this.state.forecast.currently}
              text={this.state.localText.current}
              locale={this.state.language}
              daily={this.state.forecast.daily}
              units={this.state.forecast.flags.units}
              date={this.state.localText.date}
            />)
        }

        
        <Footer />
      </div>
    );
  }
}

export default App;

/* 

{
          !this.state.geoForbidden || this.state.isLoading ?
          <React.Fragment>
            {paragraph}
            <div>Loading</div> 
          </React.Fragment> :
          
          <div>
            
          </div>
        }
        */ 
