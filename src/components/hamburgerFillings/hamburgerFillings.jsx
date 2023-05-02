import React from "react";
import styles from "./hamburgerFillings.module.scss";
import { goods } from "../../data/data.mock";

function HamburgerFillings({ title, onAddFilling }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {goods.fillings.map((el) => (
          <div className={styles.fillings} key={el.id}>
            <button className={styles.fillings_btn} onClick={() => onAddFilling(el)}>
              <img className={styles.fillings_img} src={el.src} alt="burger" />
            </button>
            <h3>{el.name}</h3>
            <span>{el.price} usd</span>
            <span>{el.calories} kcal</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default HamburgerFillings;

