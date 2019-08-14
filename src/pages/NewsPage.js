import React, { useState, useEffect } from "react";
import NewsInput from "../components/NewsInput";
import SelectNews from "../components/SelectNews";
import NewsList from "../components/NewsList";
import Navigation from "../components/Navigation";
import { CSSTransition } from "react-transition-group";
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
      <CSSTransition
        in={!toggleBox}
        timeout={1000}
        classNames={{
          enter: classes["anim-enter"],
          enterActive: classes["anim-enter-active"],
          exit: classes["anim-exit"],
          exitActive: classes["anim-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <NewsInput getData={transferData} toggleResults={changeToggleBox} />
      </CSSTransition>
      <CSSTransition
        in={!toggleBox}
        timeout={1000}
        classNames={{
          enter: classes["anim-enter"],
          enterActive: classes["anim-enter-active"],
          exit: classes["anim-exit"],
          exitActive: classes["anim-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <SelectNews getData={transferData} toggleResults={changeToggleBox} />
      </CSSTransition>
      <CSSTransition
        in={toggleBox}
        timeout={1000}
        classNames={{
          enter: classes["anim-enter"],
          enterActive: classes["anim-enter-active"],
          exit: classes["anim-exit"],
          exitActive: classes["anim-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <NewsList
          fetchedResults={fetchedData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      </CSSTransition>
    </div>
  );
};

export default NewsPage;
