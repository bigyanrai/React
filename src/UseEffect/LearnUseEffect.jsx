import { useEffect } from "react";

const LearnUseEffect = () => {
  useEffect(() => {
    console.log("UseEffect testing");
  });
  console.log("a");
  return <div>LearnUseEffect</div>;
};

export default LearnUseEffect;
