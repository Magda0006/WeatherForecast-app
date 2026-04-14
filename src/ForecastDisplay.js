import axios from "axios";
import { useState } from "react";
function ForecastDisplay(props) {
  const city = props.weather.city;
  const [forecast, setForecast] = useState({
    sumbitted: false,
    day1: {},
    day2: {},
    day3: {},
    day4: {},
    day5: {},
    day6: {},
  });

  function getForecast() {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c`;
    axios.get(apiUrl).then(handleApiResponse);
  }
  function handleApiResponse(response) {
    setForecast({
      submitted: true,
      day1: {
        icon: response.data.daily[1].condition.icon_url,
        description: response.data.daily[1].condition.description,
        maxTemp: Math.round(response.data.daily[1].temperature.maximum),
        minTemp: Math.round(response.data.daily[1].temperature.minimum),
        time: response.data.daily[1].time,
      },
      day2: {
        icon: response.data.daily[2].condition.icon_url,
        description: response.data.daily[2].condition.description,
        maxTemp: Math.round(response.data.daily[2].temperature.maximum),
        minTemp: Math.round(response.data.daily[2].temperature.minimum),
        time: response.data.daily[2].time,
      },
      day3: {
        icon: response.data.daily[3].condition.icon_url,
        description: response.data.daily[3].condition.description,
        maxTemp: Math.round(response.data.daily[3].temperature.maximum),
        minTemp: Math.round(response.data.daily[3].temperature.minimum),
        time: response.data.daily[3].time,
      },
      day4: {
        icon: response.data.daily[4].condition.icon_url,
        description: response.data.daily[4].condition.description,
        maxTemp: Math.round(response.data.daily[4].temperature.maximum),
        minTemp: Math.round(response.data.daily[4].temperature.minimum),
        time: response.data.daily[4].time,
      },
      day5: {
        icon: response.data.daily[5].condition.icon_url,
        description: response.data.daily[5].condition.description,
        maxTemp: Math.round(response.data.daily[5].temperature.maximum),
        minTemp: Math.round(response.data.daily[5].temperature.minimum),
        time: response.data.daily[5].time,
      },
      day6: {
        icon: response.data.daily[6].condition.icon_url,
        description: response.data.daily[6].condition.description,
        maxTemp: Math.round(response.data.daily[6].temperature.maximum),
        minTemp: Math.round(response.data.daily[6].temperature.minimum),
        time: response.data.daily[6].time,
      },
    });

    console.log(forecast);
    return forecast;
  }
  const forecastDays = [
    forecast.day1,
    forecast.day2,
    forecast.day3,
    forecast.day4,
    forecast.fay5,
    forecast.day6,
  ];
  function time(time) {
    let date = new Date(time * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  if (forecast.submitted === true && props.weather.submitted === true) {
    return (
      <div className="row forecast text-center">
        {forecastDays.map((day) => (
          <div className="col">
            <div>{time(day.time)}</div>
            <div>
              <img
                className="forecastIcon"
                alt={day.description}
                src={day.icon}
              ></img>
            </div>
            <div>
              {Math.round(day.maxTemp)}°
              <span className="max-forecast-temp">
                {" "}
                {Math.round(day.minTemp)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else getForecast();
  return null;
}

export default ForecastDisplay;
