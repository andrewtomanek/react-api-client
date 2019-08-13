import React from "react";
import classes from "./WeatherCard.module.css";

const WeatherCard = props => {
  return (
    <div className={classes.text__box}>
      <img
        className={classes.weather__icon}
        src={`/images/weather-icons/${props.itemData.weather[0].icon}.svg`}
        alt="Weather"
      />
      <p className={classes.big__text}>
        Oblačnost: {props.itemData.weather[0].description}
      </p>
      <p className={classes.big__text}>Teplota: {props.itemData.main.temp}°C</p>
      <p className={classes.big__text}>
        Vlkost: {props.itemData.main.humidity}%
      </p>
      <p className={classes.big__text}>
        Tlak: {props.itemData.main.pressure} hPa
      </p>
      <p className={classes.big__text}>Město: {props.itemData.name}</p>
      <p className={classes.big__text}>Země: {props.itemData.sys.country}</p>
      <p className={classes.big__text}>
        Oblačnost: {props.itemData.clouds.all}%
      </p>
      <p className={classes.big__text}>
        Rychlost větru: {props.itemData.wind.speed}m/s
      </p>
      <p className={classes.small__text}>Délka: {props.itemData.coord.lat}</p>
      <p className={classes.small__text}>Šířka: {props.itemData.coord.lon}</p>
      <p className={classes.small__text}>
        Směr větru: {props.itemData.wind.deg}°
      </p>
      <p className={classes.small__text}>
        Min teplota: {props.itemData.main.temp_min}°C
      </p>
      <p className={classes.small__text}>
        Max teplota: {props.itemData.main.temp_max}°C
      </p>
      <p className={classes.small__text}>{props.itemData.weather[0].main}</p>
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
      {props.itemData.sys.sunrise && (
        <p className={classes.small__text}>
          Východ slunce:{" "}
          {new Date(props.itemData.sys.sunrise * 1000).toLocaleTimeString()}
        </p>
      )}
      {props.itemData.sys.sunset && (
        <p className={classes.small__text}>
          Západ slunce:{" "}
          {new Date(props.itemData.sys.sunset * 1000).toLocaleTimeString()}
        </p>
      )}
      <p className={classes.small__text}>
        Místní čas: {new Date(props.itemData.dt * 1000).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default WeatherCard;
