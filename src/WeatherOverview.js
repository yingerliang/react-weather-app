import React from 'react'
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'

export default function WeatherOverview(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix icon-temp">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <span className="temperature">{props.data.temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
            <li>Feels like: {props.data.feels}°C</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
