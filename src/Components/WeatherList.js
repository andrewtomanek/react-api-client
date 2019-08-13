import React from "react";
import WeatherCard from "../components/WeatherCard";
import classes from "./WeatherList.module.css";

const WeatherList = props => {
  return (
    <div className={classes.weather__box}>
      <button
        className={classes.reset__button}
        onClick={() => props.toggleInput()}
      >
        Vyhledat znova
      </button>
      {props.weatherResults.length !== 0 && props.toggleBox ? (
        props.weatherResults.map((item, index) => (
          <WeatherCard key={item.id} itemData={item} idx={index} />
        ))
      ) : (
        <div className={classes.error__box}>
          <p className={classes.error__text}>Výraz nenalezen</p>
        </div>
      )}
    </div>
  );
};

export default WeatherList;
