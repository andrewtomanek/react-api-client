import React, { useState, useEffect } from "react";
import ForecastInput from "../components/ForecastInput";
import ForecastList from "../components/ForecastList";
import Navigation from "../components/Navigation";
import { CSSTransition } from "react-transition-group";
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
        <ForecastInput
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
        <ForecastList
          weatherResults={weatherData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      </CSSTransition>
    </div>
  );
};

export default ForecastPage;
