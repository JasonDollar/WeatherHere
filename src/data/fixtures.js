import weatherData from './random'
import languageText from './text-locale' 
// import layouts from './layouts'

export const appTestData = {
  weather: weatherData,
  units: {
    id: 'si',
    name: 'SI',
  },
  language: 'pl',
  text: languageText,
  languageNames: [{ id: 'pl', name: 'Polski' }],
  timezone: 'Europe/Warsaw',
  locationShortName: 'Plock',
  theme: {
    name: 'Pink',
    id: 'pink',
  },
}