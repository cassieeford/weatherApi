import React, { useEffect, useState } from "react";
import "./App.css";
import SetLocation from "./SetLocation";
import "./Weather.css";
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
  const [icon, setIcon] = useState("rainbow");

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
          iconCode: jsonResponse.weather[0].icon.slice(0, 2),
          local_time: jsonResponse.timezone,
        })
      )
      .catch((error) => {
        setServerError(error);
      });
    // Icon();
    let iconClass = "";
    if (weather.iconCode === "01") {
      iconClass = "rainbow";
    } else if (weather.iconCode === "02") {
      iconClass = "sunny";
    } else if (weather.iconCode === "03") {
      iconClass = "cloudy";
    } else if (weather.iconCode === "04") {
      iconClass = "cloudy";
    } else if (weather.iconCode === "09") {
      iconClass = "rainy";
    } else if (weather.iconCode === "10") {
      iconClass = "rainy";
    } else if (weather.iconCode === "11") {
      iconClass = "stormy";
    } else if (weather.iconCode === "13") {
      iconClass = "snow";
    } else {
      iconClass = "starry";
    }
    setIcon({ iconClass });
    console.log(iconClass);
  }, [url]);

  // function Icon() {

  // console.log();

  console.log("url:", url);
  console.log("weather: ICON CODE", weather.iconCode);
  console.log("serverError:", serverError);
  console.log("icon to render:", icon.iconClass);

  return (
    <div>
      <SetLocation
        updateLocationCb={(postCode, country) =>
          updateLocation(postCode, country)
        }
      />

      {Object.keys(weather).length !== 0 && (
        <div>
          {/* <div id="fabrizio"> </div>
          <a href="http://fabrizio.co"></a> */}

          <div id="weather_wrapper">
            <div className="weatherCard">
              {/* <span className="currentHeader">{weather.city}</span> */}
              <div className="currentTemp">
                <h2 className="location">{weather.city}</h2>
                <div className="info2">
                  <span className="rain">1.3 MM</span>
                  <span className="wind">{weather.wind_speed} KM/PH</span>
                </div>
              </div>

              <div className="currentWeather">
                <h2 className="temp">{Math.round(weather.temp_max)}&deg;</h2>
                <div id="weather_icon" className={icon.iconClass}></div>
                <div className="info">
                  <p>{weather.description.toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
