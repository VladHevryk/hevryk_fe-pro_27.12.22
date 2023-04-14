import React from "react";
import classes from './MainContainer.module.scss';

const MainContainer = (props) => {

  return (
    <div className={classes.main}>
      <h1>{props.name}</h1>
    </div>
  );
};

export default MainContainer;
