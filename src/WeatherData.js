import React from "react";
import Title from "./CityNAmeDateTime.js";
import ForecastDisplay from "./ForecastDisplay.js";
import CurrentDay from "./CurrentDay.js";

function WeatherData(props) {
  return (
    <div className="weatherData">
      <div className="currentDayWeatherData">
        <Title weather={props.weather} city={props.city} />
        <CurrentDay
          unit={props.unit}
          setUnit={props.setUnit}
          weather={props.weather}
        />
        <ForecastDisplay weather={props.weather} />
      </div>
    </div>
  );
}
export default WeatherData;
