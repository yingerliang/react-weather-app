import React from 'react'
import cloudy from './images/cloudy.svg'
import sunny from './images/sunny.svg'
import fog from './images/fog.svg'
import night from './images/night.svg'
import overcast from './images/overcast.svg'
import partlycloudy from './images/partly-cloudy.svg'
import partlycloudynight from './images/partly-cloudy-night.svg'
import rain from './images/rain.svg'
import snow from './images/snow.svg'
import thunderstorm from './images/thunderstorms.svg'
import rainday from './images/rain-day.svg'
import rainnight from './images/rain-night.svg'
import './WeatherOverview.css'

export default function WeatherIcon(props) {
  const codeMapping = {
    '01d': sunny,
    '01n': night,
    '02d': partlycloudy,
    '02n': partlycloudynight,
    '03d': overcast,
    '03n': overcast,
    '04d': cloudy,
    '04n': cloudy,
    '09d': rain,
    '09n': rain,
    '10d': rainday,
    '10n': rainnight,
    '11d': thunderstorm,
    '11n': thunderstorm,
    '13d': snow,
    '13n': snow,
    '50d': fog,
    '50n': fog,
  }

  return (
    <div>
      <img
        src={codeMapping[props.code]}
        alt={props.alt}
        className="weatherIcon"
      />
    </div>
  )
}
