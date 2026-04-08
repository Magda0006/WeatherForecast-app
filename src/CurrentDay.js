function CurrentDay(props) {
  const forecast = props.forecast;

  function changeToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    props.setUnit("metric");
  }
  function getFahrenheitTemperature() {
    let celsius = forecast.today.temperature;
    let fahrenheitTemperature = Math.round((celsius * 9) / 5 + 32);
    return fahrenheitTemperature;
  }
  if (props.unit === "metric") {
    return (
      <div className="row">
        <div className="col-sm-6 today-icon">
          <img
            className=""
            alt={forecast.today.description}
            src={forecast.today.icon}
          />
          <span>
            {Math.round(forecast.today.temperature)} C° |{" "}
            <a href="/" onClick={changeToFahrenheit}>
              F°
            </a>
          </span>
        </div>
        <div className="extraDetails col-sm-6">
          <ul>
            <li>Humidity: {forecast.today.humidity}%</li>
            <li>Wind: {forecast.today.wind} Km/h</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-6">
          <img
            className=""
            alt={forecast.today.description}
            src={forecast.today.icon}
          />
          <span>
            {getFahrenheitTemperature()}{" "}
            <a href="/" onClick={changeToCelsius}>
              C°{" "}
            </a>
            | F°
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {forecast.today.humidity}%</li>
            <li>Wind: {forecast.today.wind} Km/h</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default CurrentDay;
