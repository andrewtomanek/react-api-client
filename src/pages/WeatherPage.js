import React, { useState, useEffect } from "react";
import WeatherInput from "../components/WeatherInput";
import WeatherList from "../components/WeatherList";
import Navigation from "../components/Navigation";
import { CSSTransition } from "react-transition-group";
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
      <CSSTransition
        in={!toggleBox}
        timeout={1000}
        classNames={{
          enter: classes["anim-enter"],
          enterActive: classes["anim-enter-active"],
          exit: classes["anim-exit"],
          exitActive: classes["anim-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <WeatherInput
          getData={transferData}
          toggleResults={changeToggleBox}
          getLocationData={fetchLocation}
        />
      </CSSTransition>
      <CSSTransition
        in={toggleBox}
        timeout={1000}
        classNames={{
          enter: classes["anim-enter"],
          enterActive: classes["anim-enter-active"],
          exit: classes["anim-exit"],
          exitActive: classes["anim-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <WeatherList
          weatherResults={weatherData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      </CSSTransition>
    </div>
  );
};

export default WeatherPage;
