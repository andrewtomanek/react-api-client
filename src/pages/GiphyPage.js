import React, { useState, useEffect } from "react";
import GiphyInput from "../components/GiphyInput";
import GiphyList from "../components/GiphyList";
import Navigation from "../components/Navigation";
import { CSSTransition } from "react-transition-group";
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
        <GiphyInput getData={transferData} toggleResults={changeToggleBox} />
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
        <GiphyList
          fetchedResults={fetchedData}
          toggleInput={changeToggleBox}
          toggleBox={toggleBox}
        />
      </CSSTransition>
    </div>
  );
};

export default GiphyPage;
