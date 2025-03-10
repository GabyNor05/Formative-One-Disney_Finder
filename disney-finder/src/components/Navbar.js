import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#012E57" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/comparison" style={{ margin: "10px", color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/timeline" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;