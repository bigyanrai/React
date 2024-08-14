import { useParams } from "react-router-dom";

const LearnDynamicRoute = () => {
  let params = useParams();
  return (
    <div>
      LearnDynamicRoute
      <br />
      {params.id}
      <br />
    </div>
  );
};

export default LearnDynamicRoute;
