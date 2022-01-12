import { useState } from 'react';
import './App.css';

function App() {
  
   const apiKey = '7b2388fa12cf81dd8b2b6823657d8da6';
   const [weatherData, setWeatherData] = useState([{}]);
   const [city, setCity] = useState("");

   
   const getWeather = (event) => {
     if (event.key === "Enter") {
      fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
       `).then(
         response => response.json()
       ).then (
         data => {
           setWeatherData(data)
           setCity("")
         }
       )
     }
   }
   console.log(weatherData)
  //  data && console.log(data)
  return (
    <div className="container">

<input type="text" className="input" placeholder="Enter City....." 
        onChange={e => setCity(e.target.value)} value={city} onKeyPress = {getWeather}
/>
    
    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>welcome to weather app... Please enter the name of the City</p>
      </div>

    ) : (
      <div className="weather-data">
        <p className="city">{weatherData.name}</p>
        <p className="temp">{Math.round(weatherData.main.temp)} °celcius</p>
      <p className="weather">{weatherData.weather[0].main}</p>
      </div>
    )
  }
  {weatherData.cod === "404" ? (
    <p>City not found</p>
  ) : (
    <>
    </>
  )}
    </div>
  )
}
export default App