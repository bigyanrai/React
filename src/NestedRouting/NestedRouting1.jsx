import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet></Outlet>}>
        <Route index element={<div>Home page</div>}></Route>
        <Route path="student" element={<Outlet></Outlet>}>
          <Route path="1" element={<div>1</div>}></Route>
          <Route path="ram" element={<Outlet></Outlet>}>
            <Route index element={<div>Ram page</div>}></Route>
            <Route path=":id" element={<div>dynamic route</div>}></Route>
          </Route>
          <Route index element={<div>Student Page</div>}></Route>
        </Route>
        <Route path="*" element={<div>404 page</div>}></Route>
      </Route>
    </Routes>
  );
};

export default NestedRouting1;
