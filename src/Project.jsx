import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Project/Navbar";
import Footer from "./Project/Footer";
import CreateProduct from "./Project/CreateProduct";
import ReadAllProduct from "./Project/ReadAllProduct";

const Project = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar></Navbar>
              <Outlet></Outlet>
              <Footer></Footer>
            </div>
          }
        >
          <Route index element={<div>Home Page</div>}></Route>
          <Route
            path="products"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route
              index
              element={
                <div>
                  <ReadAllProduct />
                </div>
              }
            ></Route>
            <Route
              path="create"
              element={
                <div>
                  <CreateProduct />
                </div>
              }
            ></Route>
            <Route path=":id" element={<div>Product details page</div>}></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
              <Route index element={<div>update</div>}></Route>
              <Route
                path=":id"
                element={<div>Update specific product</div>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project;
