function CurrentDay(props) {
  const weather = props.weather;

  function changeToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    props.setUnit("metric");
  }
  function getFahrenheitTemperature() {
    let celsius = weather.temperature;
    let fahrenheitTemperature = Math.round((celsius * 9) / 5 + 32);
    return fahrenheitTemperature;
  }
  if (props.unit === "metric") {
    return (
      <div className="row">
        <div className="col-sm-6 today-icon">
          <img className="" alt={weather.description} src={weather.icon} />
          <span>
            {weather.temperature} C° |{" "}
            <a href="/" onClick={changeToFahrenheit}>
              F°
            </a>
          </span>
        </div>
        <div className="extraDetails col-sm-6">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} Km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-sm-6 today-icon">
          <img className="" alt={weather.description} src={weather.icon} />
          <span>
            {getFahrenheitTemperature()}{" "}
            <a href="/" onClick={changeToCelsius}>
              C°{" "}
            </a>
            | F°
          </span>
        </div>
        <div className="extraDetails col-sm-6">
          <ul>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} Km/h</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default CurrentDay;
