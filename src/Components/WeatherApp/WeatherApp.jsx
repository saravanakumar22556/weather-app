import React, { useState } from 'react'
import "./WeatherApp.css"
import clearicon from "../assets/clear.png"
import cloudicon from "../assets/cloud.png"
import drizzleicon from "../assets/drizzle.png"
import humidityicon from "../assets/humidity.png"
import Rainicon from "../assets/rain.png"
import searchicon from "../assets/search.png"
import snowicon from "../assets/snow.png"
import windicon from "../assets/wind.png"

const WeatherApp = () => {
    let apikey ="567416c6ae7f5e72688635616734c0f2";

    const[wicon,setWicon] = useState(cloudicon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`

        let response = await fetch(url)
        let data =  await response.json();

        const humidity =document.getElementsByClassName("humidity-percent");
        const wind =document.getElementsByClassName("wind-rate");
        const temp =document.getElementsByClassName("weather-temp");
        const location =document.getElementsByClassName("wether-location");

        humidity[0].innerHTML =data.main.humidity +"%";
        wind[0].innerHTML=Math.floor(data.wind.speed) +"Km/h";
        temp[0].innerHTML=Math.floor(data.main.temp) +"°c";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n" )
        {
            setWicon(clearicon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n" )
        {
            setWicon(cloudicon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n" )
        {
            setWicon(drizzleicon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n" )
        {
            setWicon(drizzleicon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n" )
        {
            setWicon(Rainicon);
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n" )
        {
            setWicon(rainicon);
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n" )
        {
            setWicon(snowicon);
        }
        else 
        {
            setWicon(clearicon);
        }

    }
  return (
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" />
            <div className="searchicon" onClick={()=>{search()}}>
                <img src={searchicon} alt=''/>
            </div>
        </div>
        <div className="weather-image">
          <img src={wicon} alt=''/>
        </div>
        <div className="weather-temp"> 24°c </div>
        <div className="wether-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidityicon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windicon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp