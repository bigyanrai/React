import { useState } from "react";

const UseState5 = () => {
  let [type, setType] = useState("password");
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input type={type} />
      <button
        onClick={() => {
          type === "password" ? setType("text") : setType("password");
        }}
      >
        {type === "password" ? "show" : "hide"}
      </button>
    </div>
  );
};

export default UseState5;
