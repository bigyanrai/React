import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    // <Routes>
    //   <Route path="/a" element={<div>a Page</div>}></Route>
    //   <Route path="/a/a1" element={<div>a1 page</div>}></Route>
    //   <Route path="/a/a1/a2" element={<div>a2 apge</div>}></Route>
    // </Routes>

    //outet replaces the child element
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<div>Home page</div>}></Route>
        <Route path="a" element={<Outlet />}>
          <Route index element={<div>Page a</div>}></Route>
          <Route path="a1" element={<Outlet></Outlet>}>
            <Route index element={<div>a1 Page</div>}></Route>
            <Route path="a2" element={<div>a2 page</div>}></Route>
            <Route path="id" eleemnt={<div>Random page</div>}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default NestedRouting;
