import './App.css'
import Weather from './Weather'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Rebecca and is{' '}
          <a
            href="https://github.com/yingerliang/vanilla-weather-app"
            target="_blank"
          >
            open-souced.
          </a>
        </footer>
      </div>
    </div>
  )
}
