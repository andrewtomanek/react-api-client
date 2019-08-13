import React from "react";
import classes from "./ForecastCard.module.css";

const ForecastCard = props => {
  return (
    <div className={classes.text__box}>
      <img
        className={classes.weather__icon}
        src={`/images/weather-icons/${props.itemData.weather[0].icon}.svg`}
        alt="Weather"
      />
      <p className={classes.big__text}>
        Místní čas: {new Date(props.itemData.dt * 1000).toLocaleTimeString()}
      </p>
      <p className={classes.big__text}>UTC čas: {props.itemData.dt_txt} </p>
      <p className={classes.big__text}>
        Oblačnost: {props.itemData.weather[0].description}
      </p>
      <p className={classes.small__text}>{props.itemData.name}</p>
      <p className={classes.big__text}>Teplota: {props.itemData.main.temp}°C</p>
      <p className={classes.big__text}>
        Tlak: {props.itemData.main.pressure} hPa
      </p>
      <p className={classes.big__text}>
        Vlkost: {props.itemData.main.humidity}%
      </p>
      <p className={classes.big__text}>
        Oblačnost: {props.itemData.clouds.all}%
      </p>
      <p className={classes.big__text}>
        Rychlost větru: {props.itemData.wind.speed}m/s
      </p>
      <p className={classes.small__text}>
        Směr větru: {props.itemData.wind.deg}°
      </p>
      <p className={classes.small__text}>
        Min teplota: {props.itemData.main.temp_min}°C
      </p>
      <p className={classes.small__text}>
        Max teplota: {props.itemData.main.temp_max}°C
      </p>
      {props.itemData.rain && (
        <>
          {props.itemData.rain["1h"] && (
            <p className={classes.small__text}>
              Déšť za 1h: {props.itemData.rain["1h"]}mm
            </p>
          )}
          {props.itemData.rain["3h"] && (
            <p className={classes.small__text}>
              Déšť za 3h: {props.itemData.rain["3h"]}mm
            </p>
          )}
        </>
      )}
      {props.itemData.snow && (
        <>
          {props.itemData.snow["1h"] && (
            <p className={classes.small__text}>
              Déšť za 1h: {props.itemData.snow["1h"]}mm
            </p>
          )}
          {props.itemData.snow["3h"] && (
            <p className={classes.small__text}>
              Déšť za 3h: {props.itemData.snow["3h"]}mm
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ForecastCard;
