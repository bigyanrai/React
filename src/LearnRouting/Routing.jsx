import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import LearnDynamicRoute from "../LearnDynamicRoute/LearnDynamicRoute";
import GetQueryParams from "../LearnDynamicRoute/GetQueryParams";
import ErrorPage from "../ErrorPage/ErrorPage";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home name={"Bigyan"} number={9813199661}></Home>}
      ></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      <Route
        path="/user/:id"
        element={<LearnDynamicRoute></LearnDynamicRoute>}
      ></Route>
      <Route path="/admin" element={<GetQueryParams></GetQueryParams>}></Route>
    </Routes>
  );
};

export default Routing;
