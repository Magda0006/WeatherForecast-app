function Title(props) {
  const weather = props.weather;

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
    let currentTime = new Date();
    let hours = currentTime.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
  }

  const currentDay = time(weather.time);
  return (
    <div>
      <h1 className="text-capitalize">{weather.city}</h1>
      <ul>
        <li>
          <div>{currentDay}</div>
        </li>
        <li className="text-capitalize">{weather.description}</li>
      </ul>
    </div>
  );
}
export default Title;
