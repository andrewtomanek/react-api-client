import React, { useState } from "react";
import classes from "./GiphyInput.module.css";
const Api_Key = process.env.REACT_APP_GIPHY_API_KEY;

const GiphyInput = props => {
  const [searchString, setSearchString] = useState("");

  const getGiphs = async () => {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${Api_Key}`
    );
    const resultJson = await result.json();
    props.toggleResults();
    props.getData(resultJson.data);
  };

  const fetchData = async () => {
    const result = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=${Api_Key}`
    );
    const resultJson = await result.json();
    return resultJson.data;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!searchString) return;
    let weatherData = await fetchData();
    props.getData(weatherData);
    props.toggleResults();
    setSearchString("");
  };

  return (
    <div className={classes.search__container}>
      <form className={classes.input__box} onSubmit={handleSubmit}>
        <label className={classes.input__label}>Najít Gifs</label>
        <input
          type="text"
          className={classes.search__input}
          value={searchString}
          placeholder="dog..."
          onChange={e => setSearchString(e.target.value)}
        />
        <button className={classes.submit__button} type="submit">
          Vyhledat
        </button>
        <button className={classes.submit__button} onClick={() => getGiphs()}>
          Aktuálně populární
        </button>
      </form>
    </div>
  );
};

export default GiphyInput;
