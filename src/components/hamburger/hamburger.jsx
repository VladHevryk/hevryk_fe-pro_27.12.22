import React from "react";
import { goods } from "../../data/data.mock";
import styles from "./hamburger.module.scss";

function Hamburger({ title, onChooseBurger }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        {goods.burgers.map((el) => (
          <div className={styles.burger} key={el.id}>
            <button
              className={styles.burger_btn}
              onClick={() => onChooseBurger(el) }
            >
              <img className={styles.burger_img} src={el.src} alt="burger" />
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

export default Hamburger;

