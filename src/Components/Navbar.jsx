import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <div>
      <nav id="navbar">
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
      <div id="mobileNav">
        <input type="checkbox" id="home" />
        <label htmlFor="home-1"> <i class="fa-solid fa-bars"></i></label>
        <div id="mobile">
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/shop" className="link">Shop</Link></li>
            <li><Link to="/news" className="link">News</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
           
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
