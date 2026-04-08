import React from "react";
import Title from "./CityNAmeDateTime.js";
import CurrentDay from "./CurrentDay.js";
import Forecast from "./Forecast.js";

function WeatherData(props) {
  return (
    <div className="weatherData">
      <div className="currentDayWeatherData">
        <Title forecast={props.forecast} />
        <div>
          <CurrentDay
            forecast={props.forecast}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </div>
        <Forecast forecast={props.forecast} />
      </div>
    </div>
  );
}
export default WeatherData;
