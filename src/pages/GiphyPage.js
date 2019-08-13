import React, { useState, useEffect } from "react";
import GiphyInput from "../components/GiphyInput";
import GiphyList from "../components/GiphyList";
import Navigation from "../components/Navigation";
import classes from "./GiphyPage.module.css";

const GiphyPage = () => {
  const [fetchedData, setWeatherData] = useState(null);
  const [toggleBox, setToggleBox] = useState(false);

  const transferData = data => {
    setWeatherData(data);
  };

  const changeToggleBox = () => {
    setToggleBox(!toggleBox);
  };

  return (
    <div className={classes.giphy__wrap}>
      <Navigation />
      {!toggleBox && (
        <GiphyInput getData={transferData} toggleResults={changeToggleBox} />
      )}
      {toggleBox && (
        <GiphyList
          fetchedResults={fetchedData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      )}
    </div>
  );
};

export default GiphyPage;
