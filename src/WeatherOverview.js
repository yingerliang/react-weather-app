import React from 'react'
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'
import WeatherTemperature from './WeatherTemperature'
import raindrop from './images/raindrop.svg'
import wind from './images/wind.svg'
import feelslike from './images/feels-like.svg'
import './WeatherOverview.css'

export default function WeatherOverview(props) {
  return (
    <div className="WeatherOverview">
      <div className="WeatherHeader">
        <h1>
          {props.data.city}, {props.data.country}
        </h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix temp">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="description-icons">
            <li>
              <img src={raindrop} alt="humidity-icon" />
              Humidity: {props.data.humidity}%
            </li>
            <li>
              <img src={wind} alt="wind-icon" />
              Wind: {props.data.wind}km/h
            </li>
            <li>
              <img src={feelslike} alt="feels-like-icon" />
              Feels like: {props.data.feels}°C
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
