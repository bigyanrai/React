import { useEffect, useState } from "react";

const LearnUseEffect2 = () => {
  let [count, setCount] = useState(0);

  //UseEffect runs in every render
  useEffect(() => {
    console.log("UseEffect 1");
  });
  //We can have multiple useEffect , If you miss an array(dependency) [],useEffect wil run in every render
  //UseEffet runs in first render onlyc
  useEffect(() => {
    console.log("UseEffect 2");
  }, []);

  //UseEffect will run in first render from the second render it will only run when the count state value is changed
  useEffect(() => {
    console.log("UseEffect 1");
  }, [count]);

  //dependency array[] ma bahira ko variable or function matra rakhne useEffect vitra ko ta aafai run vaihalcha, example : a rakhana pardaina
  useEffect(() => {
    let a = 10;
    console.log(a);
  }, [count]);

  return (
    <>
      <div>Count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </>
  );
};

export default LearnUseEffect2;
