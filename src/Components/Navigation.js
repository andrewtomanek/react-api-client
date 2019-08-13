import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <nav className={classes.main__navigation}>
    <ul className={classes.nav__list}>
      <li className={classes.nav__item}>
        <NavLink className={classes.nav__link} to="/">
          Počasí
        </NavLink>
      </li>
      <li className={classes.nav__item}>
        <NavLink className={classes.nav__link} to="/forecast">
          Prědpověd
        </NavLink>
      </li>
      <li className={classes.nav__item}>
        <NavLink className={classes.nav__link} to="/news">
          Zprávy
        </NavLink>
      </li>
      <li className={classes.nav__item}>
        <NavLink className={classes.nav__link} to="/giphy">
          Giphy
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
