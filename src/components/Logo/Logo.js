import React from "react";
import burgerLogo from "../../assets/burger.jpeg";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger"></img>
  </div>
);

export default logo;
