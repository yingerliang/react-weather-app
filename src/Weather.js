import React, { useState } from 'react'
import axios from 'axios'
import FormattedDate from './FormattedDate'
import './Weather.css'

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
              <li>Feels like: {weatherData.feels}°C</li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    const apiKey = 'c02f2f4ad7a3939670c2af0979e7bdd0'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return 'Loading...'
  }
}
