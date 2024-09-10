import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Project from "./Project.jsx";
// import './index.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <App /> */}
    <Project />
  </BrowserRouter>
);
