import React from "react";
import styles from "./App.module.css";

class CardNumClass extends React.Component {
  pickedNum = () =>{
    this.props.pickedCardParent(this.props.cardNum);
  }
  render() {
    return (
      <p className={styles.random} onClick={this.pickedNum}>
        {this.props.cardNum}
      </p>
    );
  }
}

export default CardNumClass;
