import React from "react";
import CardNumClass from "./CardNumClass";
import ImageCards from "./ImageCards";
import OddOrEvenClass from "./OddOrEvenClass";

const cards = [
  {
    img: "/logo512.png",
    title: "Title 1",
    des: "Type your description here - 1",
  },
  {
    img: "/logo512.png",
    title: "Title 2",
    des: "Type your description here - 2",
  },
  {
    img: "/logo512.png",
    title: "Title 3",
    des: "Type your description here - 3",
  },
];

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
      cardsValues: [30, 33, 90, 45],
      pickedValue: null,
    };
  }

  handleIncrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleDecrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  pickedCardParent = (cardNum) => {
    this.setState({
      pickedValue: cardNum,
    });
  };

  render() {
    const { count, cardsValues, pickedValue } = this.state;
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <OddOrEvenClass count={count} pickedValue={pickedValue} />
        {cardsValues.map((cardNum, index) => (
          <CardNumClass
            cardNum={cardNum}
            key={index}
            pickedCardParent={this.pickedCardParent}
          />
        ))}
        {cards.map((card, index) => (
          <ImageCards key={index} card={card} />
        ))}
      </>
    );
  }
}

export default AppClass;
