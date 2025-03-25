import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/disney+.png";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className = "logo" src={logo} alt="Disney+"  />
      <div className = "nav-link" >
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/comparison" className="nav-link">Comparison</Link>
        <Link to="/timeline" className="nav-link">Timeline</Link>
      
      </div>
    </nav>
  );
}

export default Navbar;