import { useEffect, useState } from "react";
import axios from 'axios'


function App() {


  const [city, setCity] = useState('')
  const [weatherInfo, setWeatherInfo] = useState(null) 

  const apiKey = 'Your API key'
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  useEffect(()=>{
      const fetchData = async () => {
          try {
              const response = await axios.get(apiURL)
              const weatherInfoReceived = await response.data
              setWeatherInfo(weatherInfoReceived)
          } catch(error) {
              console.log(error)
          }
      }
      if(city)
        fetchData()
  }, [city, apiURL, apiKey])

  return (
    <div className="container">
        <div className="txt-center">
            <h1 className="txt-white">Weather App</h1>
        </div>
        <div className="search-container">
            <input onChange={(event) => setCity(event.target.value)} type='text' placeholder="enter city name"/>
            {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
        </div>
        <div className="icon-container">
          <i className="fa-solid fa-cloud-sun-rain m-icon"></i>
        </div>

        <div className="temp-container">
            <h1 className="txt-white">{weatherInfo && Math.round(weatherInfo.main.temp)} <sup>o</sup>C</h1>
            <p className="txt-white">{city}</p>
        </div>

        <div className="other-container">
            <div>
                <i className="fa-solid fa-water txt-white"></i>
                <p className="txt-white humidity-value">{weatherInfo && weatherInfo.main.humidity}%</p>
                <p className="txt-white">Humidity</p>
            </div>
            <div>
                <i className="fa-solid fa-wind txt-white"></i>
                <p className="txt-white humidity-value">{weatherInfo && Math.round(weatherInfo.wind.speed)} kmph</p>
                <p className="txt-white">Wind Speed</p>
            </div>
        </div>
    </div>
  );
}

export default App;


