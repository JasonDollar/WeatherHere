import weatherData from './random'
import languageText from './text-locale' 
import { unitsNames } from './unitsNames'
// import layouts from './layouts'

export const appTestData = {
  weather: weatherData,
  units: unitsNames,
  language: 'pl',
  text: languageText,
  languageNames: [{ id: 'pl', name: 'Polski' }],
  timezone: 'Europe/Warsaw',
  locationShortName: 'Plock',
  theme: {
    name: 'Pink',
    id: 'pink',
  },
  today: {
    day: '1',
    month: '1.1',
    hour: '11:11',
  },
  coordinates: { lat: 52.2296756, long: 21.0122287 },
}