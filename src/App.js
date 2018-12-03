import React, { Component, Fragment } from 'react';
import {pl, en} from './data/text-locale'
import {DARK_URL} from './data/url'
import {DARK_API, MAP_API} from './data/api/api'
import axios from 'axios'

import classes from './App.module.scss'

import Header from './components/Header/Header'
import Options from './components/Options/Options'
import Current from './components/Current/Current'
import Daily from './components/Daily/Daily'
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        long: null,
        lat: null,
        place: {}
      },
      forecast: {},
      geoForbidden: false,
      isLoading: true,
      language: 'pl', 
      localText: pl,
      searchValue: '',
      error: '',
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

      this.getWeather(latitude, longitude, this.state.language)
      }, error => {
        this.setState({geoForbidden: true})
      })
      
    
  }

  getWeather = (lat, long, lang) => {
    
    console.log(lat, long)
    axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${MAP_API}&language=${lang}`)
      .then(resp => resp.data)
      .then(data => {
        console.log(data.results)
      })
      .catch(error => this.setState({error: error.message}))

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
      .catch(error => this.setState({error: error.message}))
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

  onInputChange = e => {
    const value = e.target.value
    this.setState({searchValue: value})
  }

  onSearchFormSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.searchValue}&key=${MAP_API}`)
      .then(resp => {
        this.setState({isLoading: true})
        return resp.data.results[0].geometry.location
      })
      .then(data => {
        this.setState({
          location: {
            lat: data.lat,
            long: data.lng
          },
        })
        this.getWeather(data.lat, data.lng, this.state.language)
      })
      .catch(error => this.setState({error: error.message}))
    
  }
  render() {
    
    return (
      <div className={classes.container}>
        <Header 
          text={this.state.localText.header} 
          searchValue={this.state.searchValue} 
          onInputChange={this.onInputChange}
          onSearchFormSubmit={this.onSearchFormSubmit}
        />

        
        <Options changeLanguage={this.changeLanguage}/>
        <button onClick={this.getUserLocation}>Geolocatipon</button>
        
        

        {
          this.state.geoForbidden && !this.state.location ? <div>Not working</div> :
          (!this.state.forecast || this.state.isLoading ? <div>Loading</div> : 
            <>
            <Current 
              currently={this.state.forecast.currently}
              currentText={this.state.localText.current}
              locale={this.state.language}
              daily={this.state.forecast.daily}
              units={this.state.forecast.flags.units}
              dateText={this.state.localText.date}
            />
            <Daily 
              daily={this.state.forecast.daily}
              dateText={this.state.localText.date}
            />
            </>
          )
        }

        
        <Footer />
      </div>
    );
  }
}

export default App;
/* 


          // !this.state.geoForbidden || this.state.isLoading ?
          // <React.Fragment>
          //   {paragraph}
          //   <div>Loading</div> 
          // </React.Fragment> :
          
          // <div>
            
          // </div>
          */ 
