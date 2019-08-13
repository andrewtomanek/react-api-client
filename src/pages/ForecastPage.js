import React, { useState, useEffect } from "react";
import ForecastInput from "../components/ForecastInput";
import ForecastList from "../components/ForecastList";
import Navigation from "../components/Navigation";
import classes from "./ForecastPage.module.css";

const ForecastPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [toggleBox, setToggleBox] = useState(false);

  const transferData = data => {
    setWeatherData(data);
  };

  const fetchLocation = data => {
    setWeatherData(data);
  };

  const changeToggleBox = () => {
    setToggleBox(!toggleBox);
  };

  return (
    <div className={classes.forecast__wrap}>
      <Navigation />
      {!toggleBox && (
        <ForecastInput
          getData={transferData}
          toggleResults={changeToggleBox}
          getLocationData={fetchLocation}
        />
      )}
      {toggleBox && (
        <ForecastList
          weatherResults={weatherData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      )}
    </div>
  );
};

export default ForecastPage;
