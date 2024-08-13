import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="*" element={<div>404 page not found</div>}></Route>
    </Routes>
  );
};

export default Routing;
