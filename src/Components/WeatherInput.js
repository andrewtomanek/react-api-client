import React, { useState } from "react";
import classes from "./WeatherInput.module.css";
const Api_Key = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY;
console.log(Api_Key);
const WeatherInput = props => {
  const [cityName, setCityName] = useState("");

  const getCoordinates = async () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    const success = async pos => {
      var crd = pos.coords;
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&lang=cz&appid=${Api_Key}`
      );
      const resultJson = await result.json();
      props.getLocationData(resultJson);
      props.toggleResults();
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const fetchData = async () => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&lang=cz&appid=${Api_Key}`
    );
    const resultJson = await result.json();
    return resultJson.list;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!cityName) return;
    let weatherData = await fetchData();
    props.getData(weatherData);
    props.toggleResults();
    setCityName("");
  };

  return (
    <div className={classes.weather__search}>
      <form className={classes.input__box} onSubmit={handleSubmit}>
        <label className={classes.input__label}>Vyhledat počasí</label>
        <input
          type="text"
          className={classes.search__input}
          value={cityName}
          placeholder="zadej město..."
          onChange={e => setCityName(e.target.value)}
        />
        <button className={classes.submit__button} type="submit">
          Vyhledat
        </button>
        <button
          className={classes.submit__button}
          onClick={() => getCoordinates()}
        >
          Vyhledat podle geografické oblasti
        </button>
      </form>
    </div>
  );
};

export default WeatherInput;
