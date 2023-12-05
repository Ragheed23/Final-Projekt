import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Logo from "../assets/logo.jpg"
 

function Navbar() {
  return (
    <nav>
   
      <img src={Logo} alt="" className="navbar-logo" />
    
          <Link to="/" className="link">Home</Link>
       
          <Link to="/shop" className="link">Shop</Link>
          
          <Link to="/neuheiten" className="link">Neuheiten</Link>
          
          <Link to="/weinachtsrabbatt" className="link">WeinachtsRabbatt</Link>

    
    </nav>
   
   
  );
}

export default Navbar;
