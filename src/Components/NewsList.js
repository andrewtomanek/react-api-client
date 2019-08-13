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
        {props.fetchedResults.length !== 0 && props.toggleBox ? (
          props.fetchedResults.map((item, index) => (
            <NewsCard key={item.publishedAt} article={item} idx={index} />
          ))
        ) : (
          <div className={classes.error__box}>
            <p className={classes.error__text}>Výraz nenalezen</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
