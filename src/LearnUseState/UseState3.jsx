import { useState } from "react";

const UseState3 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {show === true && <img src="./public/vite.svg"></img>}

      {/* <button
        onClick={() => {
          if (show) setShow(false);
          else setShow(true);
        }}
      >
        {show === true ? "Hide" : "show"}
      </button> */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "hide" : "show"}
      </button>
    </div>
  );
};

export default UseState3;
