import React, { useState } from "react";
import classes from './CentralContainer.module.scss'
import MainContainer from "../MainContainer/MainContainer";

const CentralContainer = (props) => {
  return (
    <div className={classes.nav_bar}>
      <ul className={classes.nav_bar__list}>
        <h1>{props.title}</h1>
        <li className={classes.nav_bar__item}><button className={classes.nav_bar__btn}>Home</button></li>
        <li className={classes.nav_bar__item}><button className={classes.nav_bar__btn}>About Us</button> </li>
        <li className={classes.nav_bar__item}><button className={classes.nav_bar__btn}>Contact</button></li>
        <li className={classes.nav_bar__item}><button className={classes.nav_bar__btn}>Catalog</button></li>
      </ul>
    <MainContainer title="Main Container"/>
    </div>
  );
};

export default CentralContainer;