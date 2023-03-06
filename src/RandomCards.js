import React from "react";
import styles from "./App.module.css";

const RandomCards = ({ cardsValues, setPickedValue }) => {
  return (
    <>
      {cardsValues.map((cardValue, index) => {
        return (
          <div
            onClick={() => setPickedValue(cardValue)}
            className={styles.random}
            key={index}
          >
            {cardValue}
          </div>
        );
      })}
    </>
  );
};

export default RandomCards;
