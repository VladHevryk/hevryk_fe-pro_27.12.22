import React, {useState} from "react";
import classes from "./CentralContainer.module.scss";
import MainContainer from "../MainContainer/MainContainer";
import Button from "../Button/Button";

const CentralContainer = (props) => {
  const button = [
    { id: 0, title: "Home"},
    { id: 1, title: "About Us"},
    { id: 2, title: "Contact"},
    { id: 3, title: "Catalog"},
  ];

  const [name, setNames] = useState('Main Block');

  const handelName = (id) => {
    const elemenIndex = button.findIndex((c) => c.id === id);
    const newName = button[elemenIndex].title;
    setNames(newName)
  };

  return (
    <div className={classes.nav_bar}>
      <div className={classes.nav_bar__list}>
        <h1>{props.title}</h1>
        {button.map((el) => (
        <Button onName={handelName} key={el.id} {...el}/>
        ))}
      </div>
      <MainContainer name={name} />
    </div>
  );
};

export default CentralContainer;
