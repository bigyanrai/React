import { useContext } from "react";
import { Context } from "../App";

const GreatGrandChild = () => {
  let value = useContext(Context);
  // console.log(value);
  console.log("i am gcc");
  return (
    <div>
      {value.name}
      <br />
      <button
        onClick={() => {
          {
            value.setName("Hari");
          }
        }}
      >
        Change name
      </button>
    </div>
  );
};

export default GreatGrandChild;
