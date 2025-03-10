import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/disney+.png";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#012E57", height: "50px", display: "flex", alignItems: "center", opacity: "100%" }}>
      <img src={logo} alt="Disney+" style={{ width: "100px", height: "25px", padding: "20px" }} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/comparison" className="nav-link">Comparison</Link>
        <Link to="/timeline" className="nav-link">Timeline</Link>
      
      </div>
    </nav>
  );
}

export default Navbar;