import React from "react";
import GiphyCard from "../components/GiphyCard";
import classes from "./GiphyList.module.css";

const GiphyList = props => {
  return (
    <div className={classes.giphy__container}>
      <button
        className={classes.reset__button}
        onClick={() => props.toggleInput()}
      >
        Vyhledat znova
      </button>
      <ul className={classes.giphy__results}>
        {props.fetchedResults &&
          props.toggleBox &&
          props.fetchedResults.map((item, index) => (
            <GiphyCard key={item.id} itemData={item} />
          ))}
      </ul>
      <img src={`/images/giphy.png`} />
    </div>
  );
};

export default GiphyList;
