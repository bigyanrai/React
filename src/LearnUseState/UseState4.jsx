import { useState } from "react";

const UseState4 = () => {
  let [type, setType] = useState("password");
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input type={type} />
      <button
        onClick={() => {
          setType("text");
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setType("password");
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState4;
