import React, { useEffect, useState } from "react";
import "./App.css";
import SetLocation from "./SetLocation";
import WeatherRender from "./WeatherRender";
// import dotenv from "dotenv";

// dotenv.config();

// const APIKey = process.env.REACT_APP_TMDB_API_KEY;
const APIKey = "685fb3dc27f145399741a03e1adcf4ab";
//old key: "b88908dc64d43fee3d55495356791835";

const initialWeather = `http://api.openweathermap.org/data/2.5/weather?zip=3000,au&appid=${APIKey}`;

function App() {
  const [weather, setWeather] = useState("");
  const [serverError, setServerError] = useState("");
  const [url, setUrl] = useState(initialWeather);

  const updateLocation = async (postCode, country) => {
    setUrl(
      `http://api.openweathermap.org/data/2.5/weather?zip=${postCode},${country}&appid=${APIKey}`
    );
  };

  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json(); //converts the response to json.
    } else {
      throw Error(response.statusText);
    }
  }

  // Now call the function inside fetch promise resolver
  useEffect(() => {
    // useEffect will render each time the url state is changed which happens when a new postcode is submitted.
    fetch(url)
      .then(CheckError)
      .then((jsonResponse) =>
        setWeather({
          city: jsonResponse.name,
          temp_min: Number(jsonResponse.main.temp_min),
          temp_max: Math.round(jsonResponse.main.temp_max) / 10,
          wind_speed: jsonResponse.wind.speed,
          description: jsonResponse.weather[0].description,
          img: `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`,
          local_time: jsonResponse.timezone,
        })
      )
      .catch((error) => {
        setServerError(error);
      });
  }, [url]);

  console.log("url:", url);
  console.log("weather:", weather);
  console.log("serverError:", serverError);

  return (
    <div className="App">
      <SetLocation
        updateLocationCb={(postCode, country) =>
          updateLocation(postCode, country)
        }
      />
      {Object.keys(weather).length !== 0 && (
        <div id="weather_wrapper">
          <div className="weatherCard">
            <div className="currentTemp">
              <span className="temp">{Math.round(weather.temp_max)}&deg;</span>
              <span className="location">{weather.city}</span>
              <div className="info2">
                <span className="rain">1.3 MM</span>
                <span className="wind">{weather.wind_speed} KM/PH</span>
              </div>
            </div>

            <div className="currentWeather">
              <span className="conditions">&#xf00d;</span>

              {/* <img className="conditions" src={weather.icon} /> */}
              {}

              <div className="info">
                <p>{weather.description.toUpperCase()}</p>
                {/* <span className="rain">1.3 MM</span>
              <span className="wind">{weather.wind_speed} KM/PH</span> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
