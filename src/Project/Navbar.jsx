import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink style={{ margin: "20px" }} to={"/products"}>
        Products
      </NavLink>
      <NavLink style={{ margin: "20px" }} to={"/products/create"}>
        Create Product
      </NavLink>
      {/* <NavLink to={}></NavLink> */}
    </nav>
  );
};

export default Navbar;
