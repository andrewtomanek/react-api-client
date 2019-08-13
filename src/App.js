import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import WeatherPage from "./pages/WeatherPage";
import ForecastPage from "./pages/ForecastPage";
import GiphyPage from "./pages/GiphyPage";
import classes from "./App.module.css";
import "./App.css";

const App = () => {
  return (
    <div className={classes.app__wrap}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={WeatherPage} exact />
          <Route path="/forecast" component={ForecastPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/giphy" component={GiphyPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
