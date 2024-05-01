import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice";

const Counter = () => {
  // read data from store
  const count = useSelector((state) => state.counter.value);
  // changing the data by sending actions
  const dispatch = useDispatch();
  console.log("fsadlfö", count);
  return (
    <div>
      {" "}
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
