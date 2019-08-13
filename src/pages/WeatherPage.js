import React, { useState, useEffect } from "react";
import WeatherInput from "../components/WeatherInput";
import WeatherList from "../components/WeatherList";
import Navigation from "../components/Navigation";
import classes from "./WeatherPage.module.css";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [toggleBox, setToggleBox] = useState(false);

  const transferData = data => {
    setWeatherData(data);
  };

  const fetchLocation = data => {
    setWeatherData([data]);
  };

  const changeToggleBox = () => {
    setToggleBox(!toggleBox);
  };

  return (
    <div className={classes.weather__wrap}>
      <Navigation />
      {!toggleBox && (
        <WeatherInput
          getData={transferData}
          toggleResults={changeToggleBox}
          getLocationData={fetchLocation}
        />
      )}
      {toggleBox && (
        <WeatherList
          weatherResults={weatherData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      )}
    </div>
  );
};

export default WeatherPage;
