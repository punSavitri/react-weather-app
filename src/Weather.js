
import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Lisbon</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Paris</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Sydney</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#" >San Franciso</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <form className="d-flex mt-4">
            <input type="search" placeholder="Enter a city.." aria-label="Search" className="form-control mx-2" />
            <button type="submit" className="btn btn-primary">Search</button>
            <button type="search" className="btn btn-success mx-2">Current</button>
          </form>
        </div>
      </header>
      <main>
        <div className="weather-info ">
          <div className="weather-info-heading">
            <h1 className="text-start">Paris</h1>
            <div className="weather-info-detais text-start">Wednesday 14:0 minutes</div>
            <div className="weather-info-detais text-start">Cloudy</div>
          </div>
          <div className="row mt-5 ">
            <div className="col-sm-6">
              <div className="d-flex">
                <div className="weather-icon"><i class="fa-solid fa-cloud"></i></div>
                <div className="current-temperature">16°C</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div>Particiaption:82%</div>
              <div>Wind:4km/h</div>
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
        <small>This project was coded by <a href="https://github.com/punSavitri">Savitri Pun</a> and <a href="https://github.com/punSavitri/react-weather-app.git">is open-sourced on GitHub</a> and <a href="">is hosted on Netlify</a></small>
      </footer>
    </div>
  )
}