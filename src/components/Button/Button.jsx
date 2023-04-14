import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {

    const handleName = () => {
        props.onName(props.id);
      };

  return (
    <>
        <button className={classes.nav_bar__btn} onClick={handleName}>
          {props.title}
        </button>
    </>
  );
};

export default Button;
