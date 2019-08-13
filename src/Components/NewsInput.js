import React, { useState } from "react";
import classes from "./NewsInput.module.css";
const Api_Key = process.env.REACT_APP_NEWS_API_KEY;

const NewsInput = props => {
  const [searchString, setSearchString] = useState("");

  const fetchData = async () => {
    const result = await fetch(
      `https://newsapi.org/v2/everything?q=${searchString}&apiKey=${Api_Key}`
    );
    const resultJson = await result.json();
    return resultJson.articles;
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
        <label className={classes.input__label}>Vyhledat zprávy</label>
        <input
          type="text"
          className={classes.search__input}
          value={searchString}
          placeholder="..."
          onChange={e => setSearchString(e.target.value)}
        />
        <button className={classes.submit__button} type="submit">
          Vyhledat
        </button>
      </form>
    </div>
  );
};

export default NewsInput;
