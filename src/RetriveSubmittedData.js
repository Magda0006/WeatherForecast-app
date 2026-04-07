import axios from "axios";
import React, { useState } from "react";
export default function RetriveSubmittedData(props) {
  const [city, setCity] = useState(props.defaultCity);
  function getCity() {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c&units=${unit}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleApiResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

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
      </div>
    );
}
