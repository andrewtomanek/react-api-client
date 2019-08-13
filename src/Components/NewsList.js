import React from "react";
import NewsCard from "../components/NewsCard";
import classes from "./NewsList.module.css";

const NewsList = props => {
  return (
    <div className={classes.news__container}>
      <button
        className={classes.reset__button}
        onClick={() => props.toggleInput()}
      >
        Vyhledat znova
      </button>
      <ul className={classes.news__list}>
        {props.fetchedResults &&
          props.toggleBox &&
          props.fetchedResults.map((item, index) => (
            <NewsCard key={item.publishedAt} article={item} idx={index} />
          ))}
      </ul>
    </div>
  );
};

export default NewsList;
