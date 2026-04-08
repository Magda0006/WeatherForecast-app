function Forecast(props) {
  const forecast = props.forecast;
  const forecastDays = [
    forecast.day2,
    forecast.day3,
    forecast.day4,
    forecast.day5,
    forecast.day6,
    forecast.day7,
  ];
  function time(time) {
    let date = new Date(time * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

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
}
export default Forecast;
