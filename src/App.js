import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counterSlice";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(number));
  };

  const updateNumberHandler = (e) => {
    if (isNaN(+e.target.value)) return;
    setNumber(+e.target.value);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => incrementHandler()}>+</button>
      <button onClick={() => decrementHandler()}>-</button>
      <input type="text" onChange={(e) => updateNumberHandler(e)} />
      <button onClick={() => incrementByAmountHandler()}>+{number}</button>
    </div>
  );
}

export default App;
