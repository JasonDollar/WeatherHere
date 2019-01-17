const pl = {
  id: 'pl',
  name: 'Polski',

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
    moon: ['Nów', 'Wschodzący sierp', 'Pierwsza kwadra', 'Wschodzący księżyc', 'Pełnia', 'Ubywający księżyc', 'Trzecia kwadra', 'Ubywający sierp'],
    ozone: 'Ozon',
    windGust: 'Wiatr w porywach',
    location: 'Nieznana lokacja',
    icon: 'Ikona pogody',

  },
  date: {
    weekDay: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Dziś'],
    weekDayShort: ['Nie', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
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
    iconName: 'Znak wyboru (fajka)',
  },
  welcome: 'Szukaj lokalizacji',

}

const en = {
  id: 'en',
  name: 'English',
  layout: {
    search: 'Search',
    settings: 'Settings',
    forecast: 'Forecast',
    geo: 'Geo',
    geoFull: 'Geolocalization',
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
    moon: ['New Moon', 'Waxing crescent', 'First quarter', 'Waxing gibbous', 'Full moon', 'Waning gibbous', 'Last quarter', 'Waning crescent'],
    ozone: 'Ozone',
    windGust: 'Wind gust',
    location: 'Unknown location',
    icon: 'Weather\'s icon',
  },
  date: {
    weekDay: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekDayShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'TDY',
    temperature: 'Temperature',
    temperatureMax: 'Temperature Max.',
    temperatureMin: 'Temperature Min',
  },
  hourly: {
    hour: 'Hour',
    precipProb: 'Precipitation chance (%)',
    precipProbShort: 'Precipitation chance',
    temperature: 'Temperature',
    temperatureShort: 'Temperature',
  },
  update: 'Last updated: ',
  settings: {
    changeLang: 'Change language',
    changeTheme: 'Change theme',
    changeUnits: 'Change Units',
    units: ['SI', 'US', 'UK', 'CA'],
    iconName: 'Tick icon',
  },
  welcome: 'Search location',
}



const language = {
  en,
  pl,
}
export { pl, en } 
export default language