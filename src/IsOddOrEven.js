import styles from "./App.module.css";
import React from "react";

const IsOddOrEven = ({ count, pickedValue }) => {
  const oddOrEven = pickedValue % 2 === 0 ? "Even" : "Odd";
  return (
    <h2>
      Number is{" "}
      {pickedValue && (
        <span className={oddOrEven === "even" ? styles.even : styles.odd}>
          {oddOrEven}
        </span>
      )}
    </h2>
  );
};

export default IsOddOrEven;
