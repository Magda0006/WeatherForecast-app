import axios from "axios";
import React, { useState } from "react";
import WeatherData from "./WeatherData";

export default function RetriveSubmittedData(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [forecast, setForecast] = useState({ submitted: false });
  const [unit, setUnit] = useState("metric");

  function getCity() {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c&units=${unit}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleApiResponse(response) {
    console.log(response);
    setForecast({
      submitted: true,
      city: response.data.city,
      today: {
        time: response.data.daily[0].time,
        temperature: response.data.daily[0].temperature.day,
        humidity: response.data.daily[0].temperature.humidity,
        wind: response.data.daily[0].wind.speed,
        icon: response.data.daily[0].condition.icon_url,
        description: response.data.daily[0].condition.description,
      },
      day2: {
        time: response.data.daily[1].time,
        minTemp: response.data.daily[1].temperature.minimum,
        maxTemp: response.data.daily[1].temperature.maximum,
        icon: response.data.daily[1].condition.icon_url,
        description: response.data.daily[1].condition.description,
      },

      day3: {
        time: response.data.daily[2].time,
        minTemp: response.data.daily[2].temperature.minimum,
        maxTemp: response.data.daily[2].temperature.maximum,
        icon: response.data.daily[2].condition.icon_url,
        description: response.data.daily[2].condition.description,
      },

      day4: {
        time: response.data.daily[3].time,
        minTemp: response.data.daily[3].temperature.minimum,
        maxTemp: response.data.daily[3].temperature.maximum,
        icon: response.data.daily[3].condition.icon_url,
        description: response.data.daily[3].condition.description,
      },

      day5: {
        time: response.data.daily[4].time,
        minTemp: response.data.daily[4].temperature.minimum,
        maxTemp: response.data.daily[4].temperature.maximum,
        icon: response.data.daily[4].condition.icon_url,
        description: response.data.daily[4].condition.description,
      },
      day6: {
        time: response.data.daily[5].time,
        minTemp: response.data.daily[5].temperature.minimum,
        maxTemp: response.data.daily[5].temperature.maximum,
        icon: response.data.daily[5].condition.icon_url,
        description: response.data.daily[5].condition.description,
      },
      day7: {
        time: response.data.daily[6].time,
        minTemp: response.data.daily[6].temperature.minimum,
        maxTemp: response.data.daily[6].temperature.maximum,
        icon: response.data.daily[6].condition.icon_url,
        description: response.data.daily[6].condition.description,
      },
    });

    return forecast;
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (forecast.submitted === true) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                className="search-bar w-100"
                placeholder="Enter a city..."
                type="search"
                autoFocus="on"
                onChange={handleCity}
              ></input>
            </div>
            <div className="col-sm-3">
              <input
                className="submit-btn btn-primary ms-2 w-100"
                type="submit"
              ></input>
            </div>
          </div>
        </form>
        <WeatherData forecast={forecast} unit={unit} setUnit={setUnit} />
      </div>
    );
  } else getCity();
}
