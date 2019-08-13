import React from "react";
import classes from "./GiphyCard.module.css";

const GiphyCard = props => {
  return (
    <article className={classes.giphy__item}>
      <div className={classes.giphy__content}>
        <div className={classes.giphy__cover}>
          <div className={classes.giphy__preview}>
            <img
              className={classes.preview__img}
              src={props.itemData.images.preview_gif.url}
            />
          </div>
          <div className={classes.giphy__original}>
            <img
              className={classes.original__img}
              src={props.itemData.images.original.url}
            />
          </div>
        </div>
        <div className={classes.giphy__text}>
          <h5 className={classes.giphy__title}>{props.itemData.title}</h5>
          <a className={classes.giphy__source} href={props.url}>
            go to Giphy
          </a>
          <a
            className={classes.giphy__author}
            href={props.itemData.source_post_url}
          >
            {props.itemData.source_tld}
          </a>
          <p className={classes.giphy__time}>
            {props.itemData.trending_datetime}
          </p>
        </div>
      </div>
    </article>
  );
};

export default GiphyCard;
