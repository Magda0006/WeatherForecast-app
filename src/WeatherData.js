import React from "react";
import Title from "./CityNAmeDateTime.js";
import CurrentDay from "./CurrentDay.js";
import Forecast from "./Forecast.js";

function WeatherData(props) {
  return (
    <div>
      <Title forecast={props.forecast} />
      <div className="#">
        <CurrentDay
          forecast={props.forecast}
          unit={props.unit}
          setUnit={props.setUnit}
        />
        <Forecast forecast={props.forecast} />
      </div>
    </div>
  );
}
export default WeatherData;
