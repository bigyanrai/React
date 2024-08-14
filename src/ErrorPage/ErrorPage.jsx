import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      {/* <div>ErrorPage</div> */}
      {<Navigate to={"/"}></Navigate>}
    </>
  );
};

export default ErrorPage;
