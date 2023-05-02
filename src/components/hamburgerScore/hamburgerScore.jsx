import React from "react";
import styles from "./hamburgerScore.module.scss";

function HamburgerScore({ onCalculateScore }) {
  return (
      <div className={styles.container}>
        <h2 className={styles.title}>Score</h2>
        <p>Price: {onCalculateScore().total} </p>
        <p>Calories: {onCalculateScore().calories}</p>
      </div>
  );
}

export default HamburgerScore;
