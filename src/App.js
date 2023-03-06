import { useState } from "react";
import IsOddOrEven from "./IsOddOrEven";
import RandomCards from "./RandomCards";

function App() {
  let [count, setCount] = useState(0);
  const cardsValues = [30, 33, 90, 45];
  const [pickedValue, setPickedValue] = useState(null);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const reset = () => {
    if (count === 0) {
      alert("Allready Number is 0");
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <IsOddOrEven count={count} pickedValue={pickedValue} />
      <RandomCards cardsValues={cardsValues} setPickedValue={setPickedValue} />
    </>
  );
}

export default App;
