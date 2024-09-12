import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "black",
        padding: "20px",
        margin: "0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid darkmagenta",
      }}
    >
      <NavLink
        style={{
          color: "white", // Changed text color to black
          margin: "20px",
          textDecoration: "none", // Removes underline
          fontWeight: "bold", // Keeps the text bold
          fontFamily: "Arial",
          fontSize: "20px", // Increased font size
          transition: "color 0.3s ease",
        }}
        to={"/products"}
      >
        Products
      </NavLink>
      <NavLink
        style={{
          margin: "20px",
          color: "white", // Changed text color to black
          // Changed text color to black
          textDecoration: "none", // Removes underline
          fontWeight: "bold", // Keeps the text bold
          fontSize: "20px", // Increased font size
          fontFamily: "Arial",
          transition: "color 0.3s ease",
        }}
        to={"/products/create"}
      >
        Create Product
      </NavLink>
      {/* <NavLink to={}></NavLink> */}
    </nav>
  );
};

export default Navbar;
