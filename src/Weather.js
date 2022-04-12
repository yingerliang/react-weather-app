import React, { useState } from 'react'
import axios from 'axios'
import WeatherOverview from './WeatherOverview'
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    })
  }

  function search() {
    const apiKey = 'c02f2f4ad7a3939670c2af0979e7bdd0'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleInput(event) {
    setCity(event.target.value)
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
                onChange={handleInput}
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
              <input
                type="submit"
                value="Location"
                className="btn btn-primary location"
              />
            </div>
          </div>
        </form>
        <WeatherOverview data={weatherData} />
      </div>
    )
  } else {
    search()
    return 'Loading...'
  }
}
