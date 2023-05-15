import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temp: "68",
    date: "Monday 17:05",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humity: "26",
    wind: "5",
  };

  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <form className="search-form">
            <input
              type="search"
              placeholder="Type a city..."
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
            />

            <input type="submit" value="Search" />
          </form>

          <div className="current-info">
            <div className="row">
              <div className="col-6">
                <h1>{weatherData.city}</h1>

                <h2>{weatherData.temp} °F</h2>
                <p>{weatherData.date}</p>

                <p></p>
              </div>
              <div className="row">
                <div className="col-6">
                  <span>
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float-left"
                    />
                    <p></p>
                    <h3>{weatherData.description}</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="humity-wind">
            <ul>
              <li>Humidity: {weatherData.humity}%</li>
              <li> Wind: {weatherData.wind}m/h</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="open-source">
            <small>
              <a href="https://github.com/weralston/weather-app">
                Open souce code
              </a>{" "}
              by Wendy Ralston
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
