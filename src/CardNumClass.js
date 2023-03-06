import React from "react";
import styles from "./App.module.css";
import Logo from "./logo192.png";

class CardNumClass extends React.Component {
  pickedNum = () => {
    this.props.pickedCardParent(this.props.cardNum);
  };
  render() {
    return (
      <>
        {/* <img src={Logo} alt="" /> */}
        <p className={styles.random} onClick={this.pickedNum}>
          {this.props.cardNum}
        </p>
      </>
    );
  }
}

export default CardNumClass;
