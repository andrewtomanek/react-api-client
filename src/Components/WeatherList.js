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
      {props.weatherResults &&
        props.toggleBox &&
        props.weatherResults.map((item, index) => (
          <WeatherCard key={item.id} itemData={item} idx={index} />
        ))}
    </div>
  );
};

export default WeatherList;
