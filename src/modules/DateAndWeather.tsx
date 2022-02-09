import React, { useState, useEffect } from "react";
import "./DateAndWeather.css"

const monthNames: String[] = [
    "Tammi",
    "Helmi",
    "Maalis",
    "Huhti",
    "Touko",
    "Kesä",
    "Elo",
    "Syys",
    "Loka",
    "Marras",
    "Joulu",
  ];

function DateAndWeather() {

    const [d, setDate] = useState(new Date());

    useEffect(() => {
      var timer = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer);
      };
    });


    let weatherData = {
        temperature: NaN,
        description: "",
        icon: require("../icons/unknown.png")
    };
    const apiKey = "612eaa140b036b675b476a245ae93ba4";
    async function fetchData() {
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kauniainen,fi&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            let celsius:number = Math.floor(data.main.temp - 273.15);
            weatherData.temperature = celsius;
            weatherData.description = data.weather[0].description;
            weatherData.icon = require(`../icons/${data.weather[0].icon}.png`);

        });
    }

    fetchData();
    const [weather, setWeather] = useState(weatherData);
    useEffect(() => {
        var timer = setInterval(() => {
            fetchData();
            setWeather(weatherData);
        }, 60000);
        return function cleanup() {
          clearInterval(timer);
        };
      });
    

  return (
    <div className="weatherBlock">
        <div className="date">
            <div className="month">{monthNames[d.getMonth()]}</div>
            <div className="day">{d.getDate()}</div>
        </div>
        <div className="weather">
            <div className="weatherIcon">
                <img src={weather.icon}/>
            </div>
            <div className="weatherValue">
                <p>{weather.temperature} °<span className="g">C</span></p>
            </div>
            <div className="weatherDescription">
                <p>{weather.description}</p>
            </div>
        </div>
    </div>
  );
}

export default DateAndWeather;
