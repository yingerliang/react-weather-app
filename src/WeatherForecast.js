import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './WeatherForecast.css'
import WeatherForecastDay from './WeatherForecastDay'

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  } else {
    const apiKey = '54dfc62951352928127c2936e913c9ea'
    const lat = props.coordinates.lat
    const lon = props.coordinates.lon
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse)

    return null
  }
}
