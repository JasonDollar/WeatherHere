const pl = {
  id: 'pl',
  name: 'Polski',
  header: {
    title: 'Pogoda',
    search: 'Szukaj',
  },  
  layout: {
    search: 'Szukaj',
    settings: 'Ustawienia',
    forecast: 'Pogoda',
    geo: 'Geo',
    geoFull: 'Geolokalizacja',
    inputPlaceholder: 'Szukaj lokalizacji',
  },
  current: {
    today: 'Dziś',
    humidity: 'Wilgotność',
    wind: 'Wiatr',
    precipProb: 'Opady',
    precipType: 'Rodzaj opadu',
    precipInt: 'Intensywność opadu',
    appTemp: 'Temperatura odczuwalna',
    dewPoint: 'Punkt rosy',
    pressure: 'Ciśnienie',
    cloudCov: 'Zachmurzenie',
    visibility: 'Widoczność',
    uvIndex: 'Indeks UV',
    sunrise: 'Wschód słońca',
    sunset: 'Zachód słońca',
    moonphase: 'Faza księżyca',
    ozone: 'Ozon',
    windGust: 'Wiatr w porywach',
    location: 'Nieznana lokacja',
  },
  date: {
    weekDay: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Dziś'],
    weekDayShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
    today: 'Dziś',
    temperature: 'Temperatura',
    temperatureMax: 'Temperatura Max.',
    temperatureMin: 'Temperatura Min.',
  },
  hourly: {
    hour: 'Godzina',
    precipProb: 'Możliwość Opadów (%)',
    precipProbShort: 'Możliwość Opadów',
    temperature: 'Temperatura',
    temperatureShort: 'Temperatura',
  },
  update: 'Ostatnia aktualizacja: ',
  
  settings: {
    changeLang: 'Zmień język',
    changeTheme: 'Zmień motyw',
    changeUnits: 'Zmień jednostki',
    units: ['SI', 'US', 'UK', 'CA'],
  },
}

const en = {
  id: 'en',
  name: 'English',
  header: {
    title: 'Weather',
    
  },
  layout: {
    search: 'Search',
    settings: 'Settings',
    forecast: 'Forecast',
    geo: 'Geo',
    geoFull: 'Geolocalisation',
    inputPlaceholder: 'Search for location',
  },
  current: {
    today: 'Today',
    humidity: 'Humidity',
    wind: 'Wind',
    precipProb: 'Precipitation chance',
    precipType: 'Precipitation type',
    precipInt: 'Precipitation intensity',
    appTemp: 'Apparent temperature',
    dewPoint: 'Dew point',
    pressure: 'Pressure',
    cloudCov: 'Cloud cover',
    visibility: 'Visibility',
    uvIndex: 'UV Index',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    moonphase: 'Moon phase',
    ozone: 'Ozone',
    windGust: 'Wind gust',
    location: 'Unknown location',
  },
  date: {
    weekDay: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekDayShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
    today: 'Today',
    temperature: 'Temperature (°C)',
    temperatureMax: 'Temperature Max.',
    temperatureMin: 'Temperature Min',
  },
  hourly: {
    hour: 'Hour',
    precipProb: 'Precipitation chance (%)',
    precipProbShort: 'Precipitation chance',
    temperature: 'Temperature (°C)',
    temperatureShort: 'Temperature',
  },
  update: 'Last updated: ',
  settings: {
    changeLang: 'Change language',
    changeTheme: 'Change theme',
    changeUnits: 'Change Units',
    units: ['SI', 'US', 'UK', 'CA'],
  },
}



const language = {
  en,
  pl,
}
export { pl, en } 
export default language