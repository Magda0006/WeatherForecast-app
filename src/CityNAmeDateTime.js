function Title(props) {
  const forecast = props.forecast;
  console.log(forecast);

  function time(time) {
    let date = new Date(time * 1000);

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];

    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
  }

  const currentDay = time(forecast.today.time);
  return (
    <div>
      <h1 className="text-capitalize">{forecast.city}</h1>
      <ul>
        <li>
          <div>{currentDay}</div>
        </li>
        <li className="text-capitalize">{forecast.today.description}</li>
      </ul>
    </div>
  );
}
export default Title;
