import { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);
  console.log("i am component");
  return (
    <>
      <div>
        <div>Count is {count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseState;
