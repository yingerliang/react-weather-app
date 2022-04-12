import React from 'react'
import ForecastIcon from './ForecastIcon'
import './WeatherForecast.css'

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="column">
          <div className="WeatherForecast-day">Thu</div>
          <div className="ForecastIcon">
            <ForecastIcon code="50n" />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
