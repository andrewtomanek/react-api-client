import React, { useState, useEffect } from "react";
import classes from "./SelectNews.module.css";
const Api_Key = process.env.REACT_APP_NEWS_API_KEY;

const SelectNews = props => {
  const [defaultSources, setDefaultSources] = React.useState([]);

  const fetchSources = async () => {
    return await fetch(
      `https://newsapi.org/v2/sources?language=en&apiKey=${Api_Key}`
    ).then(result => result.json());
  };

  useEffect(() => {
    fetchSources().then(data => setDefaultSources(data.sources));
  }, []);

  const fetchData = async id => {
    const result = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${Api_Key}`
    );
    const resultJson = await result.json();
    return resultJson.articles;
  };

  const pickSource = async idx => {
    let newsData = await fetchData(idx);
    props.getData(newsData);
    props.toggleResults();
  };
  return (
    <div className={classes.select__container}>
      <section className={classes.source__box}>
        {defaultSources &&
          defaultSources.map((item, index) => (
            <article
              className={classes.source__item}
              onClick={() => pickSource(item.id)}
              key={item.id}
            >
              {item.name}
            </article>
          ))}
      </section>
    </div>
  );
};

export default SelectNews;
