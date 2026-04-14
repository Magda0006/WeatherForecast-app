import axios from "axios";
import React, { useState } from "react";
import WeatherData from "./WeatherData";

export default function RetriveSubmittedData(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ submitted: false });
  const [unit, setUnit] = useState("metric");

  function getCity() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c&units=${unit}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleApiResponse(response) {
    console.log(response.data);
    setWeather({
      submitted: true,
      city: response.data.city,
      time: response.data.time,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });

    return weather;
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weather.submitted === true) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row search-engine">
            <div className="col-9 search-bar">
              <input
                className="form-control w-100"
                placeholder="Enter a city..."
                type="search"
                autoFocus="on"
                onChange={handleCity}
              ></input>
            </div>
            <div className="col-3 submit-btn">
              <input className="btn btn-primary  w-100" type="submit"></input>
            </div>
          </div>
        </form>
        <WeatherData
          weather={weather}
          city={city}
          unit={unit}
          setUnit={setUnit}
        />
      </div>
    );
  } else getCity();
}
