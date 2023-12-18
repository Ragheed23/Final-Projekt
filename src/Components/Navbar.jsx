import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.jpg";

function Navbar() {
  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <div className={"mobile-menu"}>
        {/* <img src={Logo} alt="" className="navbar-logo" />
        <h2>Bayern Munich</h2> */}

        <Link to="/" className="link" onClick={toggleMobileMenu}>
          Home
        </Link>

        <Link to="/shop" className="link" onClick={toggleMobileMenu}>
          Shop
        </Link>

        <Link to="/news" className="link" onClick={toggleMobileMenu}>
          News
        </Link>
        <Link to="/about" className="link" onClick={toggleMobileMenu}>
          About
        </Link>

        <Link to="/contact" className="link" onClick={toggleMobileMenu}>
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
    <>
      <div className='topnav'>
        {/* Your Logo/Brand here */}
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <h2>Bayern Munich</h2>

        {/* Desktop Menu, which only appears on large screens */}
        <div className='menu'>
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

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
}

export default Navbar;
