import './App.css'
import React from 'react'
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Auckland" />
        <footer>
          This project was coded by Rebecca and is{' '}
          <a
            href="https://github.com/yingerliang/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced.
          </a>{' '}
          Icons from{' '}
          <a
            href="https://bas.dev/projects/weather-icons"
            target="_blank"
            rel="noreferrer"
          >
            Bas
          </a>
        </footer>
      </div>
    </div>
  )
}
