import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <div>
      <nav>
        <img src={Logo} alt="" className="navbar-logo" />
        <h2>Bayern Munich</h2>

        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/shop" className="link">
          Shop
        </Link>

        <Link to="/news" className="link">
          News
        </Link>
        <Link to="/about" className="link">
          About
        </Link>

        <Link to="/contact" className="link">
          Contact
        </Link>

      </nav>
    </div>
  );
}

export default Navbar;
