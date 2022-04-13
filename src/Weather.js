import React, { useState } from 'react'
import axios from 'axios'
import WeatherOverview from './WeatherOverview'
import WeatherForecast from './WeatherForecast'
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      country: response.data.sys.country,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleCityInput(event) {
    setCity(event.target.value)
  }

  function search() {
    const apiKey = '54dfc62951352928127c2936e913c9ea'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  function getCurrentLocation(event) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition((position) => {
      const apiKey = '54dfc62951352928127c2936e913c9ea'
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(handleResponse)
    })
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityInput}
              />
            </div>
            <div className="col">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search"
              />
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-primary location"
                onClick={getCurrentLocation}
              >
                Location
              </button>
            </div>
          </div>
        </form>
        <WeatherOverview data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    )
  } else {
    search()
    return 'Loading...'
  }
}
