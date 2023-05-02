import React from "react";
import styles from "./hamburgerAdded.module.scss";
import { goods } from "../../data/data.mock";

function HamburgerAdded({ title, onAddAddition }) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {goods.added.map((el) => (
          <div className={styles.added} key={el.id}>
            <button
              className={styles.added_btn}
              onClick={() => onAddAddition(el)}
            >
              <img className={styles.added_img} src={el.src} alt="burger" />
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

export default HamburgerAdded;

