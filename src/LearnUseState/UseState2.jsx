import { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {show === true && <img src="./public/vite.svg"></img>}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState2;
