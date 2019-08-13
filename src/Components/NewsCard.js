import React from "react";
import classes from "./NewsCard.module.css";

const NewsCard = props => {
  return (
    <li className={classes.news__item}>
      <div className={classes.img__box}>
        <a className={classes.img__link} href={props.article.url}>
          <img className={classes.news__img} src={props.article.urlToImage} />
        </a>
      </div>
      <div className={classes.text__box}>
        <div className={classes.news__header}>
          <h4 className={classes.news__title}>
            <a className={classes.img__link} href={props.article.url}>
              {props.article.title}
            </a>
          </h4>
          <h5 className={classes.news__author}>{props.article.author}</h5>
        </div>
        <p className={classes.news__content}>{props.article.description}</p>
      </div>
    </li>
  );
};

export default NewsCard;
