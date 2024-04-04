
import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  //define state variables
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeatherData(response) {
    console.log(response);
    setWeather({
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    //make an api call
    let apiKey = "5b565b9df0c73c61b9800cce1a0e8af7";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    console.log(apiUrl);
    //request axios to get data from api 
    axios.get(apiUrl).then(showWeatherData);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  //create a form variable
  return (
    <div div className="Weather container" >
      <header>
        <form onSubmit={handleSubmit} className="d-flex mt-4">
          <input type="search" placeholder="Enter a city.." aria-label="Search" className="form-control mx-2" onChange={updateCity} />
          <button type="submit" className="btn btn-primary">Search</button>
          <button type="search" className="btn btn-success mx-2">Current</button>
        </form>
      </header>
      <main>
        <div className="weather-info ">
          <div className="weather-info-heading">
            <h1 className="text-start">{weather.cityName}</h1>
            <div className="weather-info-detais text-start">Wednesday 14:0 minutes</div>
            <div className="weather-info-detais text-start">{weather.description}</div>
          </div>
          <div className="row mt-5 ">
            <div className="col-sm-6">
              <div className="d-flex">
                <div className="weather-icon"><i class="fa-solid fa-cloud"></i></div>
                <div className="current-temperature">{weather.temperature}°C</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div>Particiaption:82%</div>
              <div>Wind:{weather.wind}km/h</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="weather-forecast">
            <div className="row">
              <div className="col-2">
                <div>Fri</div>
                <div><i class="fa-solid fa-sun"></i></div>
                <div>13°</div>
              </div>
              <div className="col-2">
                <div>Sat</div>
                <div><i class="fa-solid fa-cloud-bolt"></i></div>
                <div>13°</div>
              </div>
              <div className="col-2">
                <div>Sun</div>
                <div><i class="fa-solid fa-cloud-sun"></i></div>
                <div>25°</div>
              </div>
              <div className="col-2">
                <div>Mon</div>
                <div><i class="fa-solid fa-cloud-moon-rain"></i></div>
                <div>20°</div>
              </div>
              <div className="col-2">
                <div>Tue</div>
                <div><i class="fa-solid fa-cloud-moon"></i></div>
                <div>11°</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-5">
        <small>This project was coded by <a href="https://github.com/punSavitri">Savitri Pun</a> and <a href="https://github.com/punSavitri/react-weather-app.git">is open-sourced on GitHub</a> and <a href="https://react-weather-app2024.netlify.app/">is hosted on Netlify</a></small>
      </footer>
    </div>
  )
}



