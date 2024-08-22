import { useEffect, useState } from "react";

const LearnUseEffect1 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  useEffect(() => {
    //cleanup function is the function which is return by useeffect

    //cleanup function does not execute on first render(component mount),but from the second render if useEffect execute, cleanup function runs at first then other code will run

    console.log("UseEffectTest");
    return () => {
      console.log("Cleanup function");
    };
  }, [count]);
  return (
    <>
      <div>The count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <div>The count is {count1}</div>
      <button
        onClick={() => {
          setCount1(count1 - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default LearnUseEffect1;
