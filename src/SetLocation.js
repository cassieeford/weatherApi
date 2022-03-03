import React, { useState } from "react";
import CountryCodes from "./CountryCodes";

function SetLocation(props) {
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("au");

  function handleSubmit(e) {
    e.preventDefault();
    props.updateLocationCb(postCode, country);
    console.log("postcode", postCode, country);
  }

  console.log("CODE:", postCode, "COUNTRY:", country);

  return (
    <div className="NewCityForm">
      <div className="input-boxes">
        <form onSubmit={handleSubmit}>
          <b className="header">COUNTRY:</b>
          <select
            className="search-bar"
            onChange={(e) => setCountry(e.target.value)}
          >
            {CountryCodes.map((country) => (
              <option type="submit" value={country.Code}>
                {country.Code}-{country.Name}
              </option>
            ))}
          </select>
          <b className="header">POST CODE:</b>
          <label>
            <input
              type="text"
              className="search-bar"
              // placeholder="Search..."
              onChange={(e) => setPostCode(e.target.value)} //put postcode in State
              name="postCode"
            />
          </label>
          <br></br>
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
}
export default SetLocation;
