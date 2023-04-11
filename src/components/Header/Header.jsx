import React from "react";
import classes from "./Header.module.scss";

const Header = (props) => {
  return <div className={classes.header_block}>{props.title}</div>;
};

export default Header;
