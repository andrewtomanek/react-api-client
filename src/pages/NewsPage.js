import React, { useState, useEffect } from "react";
import NewsInput from "../components/NewsInput";
import SelectNews from "../components/SelectNews";
import NewsList from "../components/NewsList";
import Navigation from "../components/Navigation";
import classes from "./NewsPage.module.css";

const NewsPage = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [toggleBox, setToggleBox] = useState(false);

  const transferData = data => {
    setFetchedData(data);
  };

  const changeToggleBox = () => {
    setToggleBox(!toggleBox);
  };

  return (
    <div className={classes.news__wrap}>
      <Navigation />
      {!toggleBox && (
        <NewsInput getData={transferData} toggleResults={changeToggleBox} />
      )}
      {!toggleBox && (
        <SelectNews getData={transferData} toggleResults={changeToggleBox} />
      )}
      {toggleBox && (
        <NewsList
          fetchedResults={fetchedData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      )}
    </div>
  );
};

export default NewsPage;
