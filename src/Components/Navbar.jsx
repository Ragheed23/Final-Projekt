import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";

function Navbar() {
  const MobileMenu = () => {
    return (
      <div className={"mobile-menu"}>
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
      </div>
    );
  };

  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };
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

      {/* This button only shows up on small screens. It is used to open the mobile menu */}
      <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
        &#8801;
      </button>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Navbar;
