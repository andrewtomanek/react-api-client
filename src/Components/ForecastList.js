import React from "react";
import ForecastCard from "../components/ForecastCard";
import classes from "./ForecastList.module.css";

const ForecastList = props => {
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
          <ForecastCard key={item.dt} itemData={item} idx={index} />
        ))}
    </div>
  );
};

export default ForecastList;
