import { useDispatch, useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateProductUsingRtk from "./Project/CreateProductUsingRtk";
import Footer from "./Project/Footer";
import Navbar from "./Project/Navbar";
import ReadAllProductUsingRtk from "./Project/ReadAllProductUsingRtk";
import ReadSpecificProductUsingRtk from "./Project/ReadSpecificProductUsingRtk";
import UpdateProduct from "./Project/UpdateProduct";
import {
  changeCompany,
  changePrice,
  changeProductName,
  changequantity,
} from "./Redux/productSlice";
// import { changeAge, changeName } from "./Redux/infoSlice";

const Project = () => {
  // let infoData = useSelector((state) => {
  //   return state.info;
  // });

  let productData = useSelector((state) => {
    return state.product;
  });

  let dispatch = useDispatch();

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
                  <ReadAllProductUsingRtk />
                </div>
              }
            ></Route>
            {/* <Route
              index
              element={
                <div>
                  <ReadAllProduct />
                </div>
              }
            ></Route> */}
            <Route
              path="create"
              element={
                <div>
                  <CreateProductUsingRtk />
                </div>
              }
            ></Route>
            {/* <Route
              path="create"
              element={
                <div>
                  <CreateProduct />
                </div>
              }
            ></Route> */}
            <Route
              path=":id"
              element={
                <div>
                  <ReadSpecificProductUsingRtk />
                </div>
              }
            ></Route>
            {/* <Route
              path=":id"
              element={
                <div>
                  <SpecificProduct />
                </div>
              }
            ></Route> */}
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
                element={
                  <div>
                    <UpdateProduct />
                  </div>
                }
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      {/* <div>{infoData.name}</div>
      <div>{infoData.age}</div>
      {/* {console.log(typeof dispatch)} */}
      {/* <button
        onClick={() => {
          dispatch(changeName("Bigyan"));
        }}
      >
        Name
      </button>
      <button
        onClick={() => {
          dispatch(changeAge(30));
        }}
      >
        age
      </button>  */}

      <br />
      <hr />
      {/* <div>{productData.productName}</div>
      <div>{productData.price}</div>
      <div>{productData.quantity}</div>
      <div>{productData.company}</div>
      <button
        onClick={() => {
          dispatch(changeProductName("bigyan"));
        }}
      >
        ProductName
      </button>
      <button
        onClick={() => {
          dispatch(changePrice(200));
        }}
      >
        price
      </button>
      <button
        onClick={() => {
          dispatch(changequantity(2));
        }}
      >
        quanttity
      </button>
      <button
        onClick={() => {
          dispatch(changeCompany("Apple"));
        }}
      >
        quanttity
      </button> */}
    </div>
  );
};

export default Project;
