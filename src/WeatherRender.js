import React from "react";
function WeatherRender(props) {
  const w = props.weather;
  console.log("W:", props.weather);

  // const iconSource = {{w} ? `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png` :''}
  console.log(w);

  // 01d.png 	01n.png 	clear sky
  // 02d.png 	02n.png 	few clouds
  // 03d.png 	03n.png 	scattered clouds
  // 04d.png 	04n.png 	broken clouds
  // 09d.png 	09n.png 	shower rain
  // 10d.png 	10n.png 	rain
  // 11d.png 	11n.png 	thunderstorm
  // 13d.png 	13n.png 	snow
  // 50d.png 	50n.png 	mist

  // function weatherIcon () {
  //   const icon = w.weather[0].description
  //   if (icon === null) {
  //     return ''
  //   } else
  //    if (icon === 'clear sky'){
  //     return
  //   } else
  //   if (icon === ){
  //    return
  //   } else
  //   if (icon === ){
  //    return
  //   } else
  //   if (icon === ){
  //    return
  //   } else
  //   if (icon === ){
  //    return
  //   } else
  //   if (icon === ){
  //    return
  //   } else
  //   if (icon === ){
  //    return }}

  return (
    <div className="weather-box">
      <p>{w.name}</p>
      <p>Local Time: {w.timezone}</p>
      <p>{w ? w.weather[0].description : ""}</p>
      {/* {w} ?{" "}
      <img
        src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
        alt="weather-image"
      />{" "} */}
      <p>{w ? `Max: ${w.main.temp_max}` : ""}</p>
      <p>{w ? `Min: ${w.main.temp_min}` : ""}</p>
      <p>{w ? `Humidity: ${w.main.humidity}` : ""}</p>
      <p>{w ? `Wind Speed: ${w.wind.speed}` : ""}</p>

      {/* <div id="fabrizio"></div>
      <a href="http://fabrizio.co">fabrizio.co</a>

      <div class="container">
        <br></br>
        <div className="sunny"></div>
        <br></br>
        <div className="cloudy"></div>
        <br></br>
        <div className="rainy"></div>
        <br></br>
        <div className="snowy"></div>
        <br></br>
        <div className="rainbow"></div>
        <br></br>
        <div className="starry"></div>
        <br></br>
        <div className="stormy"></div>
      </div> */}
    </div>
  );
}

export default WeatherRender;
{
  /* <img
        src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}
        alt="weather-image"
      /> */
}
{
  /* <p>Max: {weather.main.temp_max}</p> */
}
{
  /* <p>Min: {weather.main.temp_min}</p> */
}
{
  /* <p>Humidity: {weather.main.humidity}</p> */
}
{
  /* <p>Wind Speed: {weather.wind.speed}</p> */
}
