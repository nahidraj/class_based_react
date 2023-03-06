import React from "react";

class OddOrEvenClass extends React.Component {
  render() {
    const { count, pickedValue } = this.props;
    return (
      <div>
        <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
        <h2>Counter</h2>
        {pickedValue && (
          <p>{pickedValue % 2 === 0 ? "Even" : "Odd"}</p>
        )}
      </div>
    );
  }
}

export default OddOrEvenClass;
