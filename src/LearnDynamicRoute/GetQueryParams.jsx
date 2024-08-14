import { useSearchParams } from "react-router-dom";

const GetQueryParams = () => {
  let [query] = useSearchParams();
  return (
    <div>
      GetQueryParams
      <br />
      {query.get("name")}
    </div>
  );
};

export default GetQueryParams;
