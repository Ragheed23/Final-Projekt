import React from "react";
import { Link } from "react-router-dom";


function Shop() {
  return (
    <div>
         <nav>
      <Link to="/herren" className="shoplink">
        HERREN
      </Link>

      <Link to="/damen" className="link">
        DAMEN
      </Link>

      <Link to="/kinder" className="link">
        KINDER
      </Link>

      <Link to="/ka" className="link">
        Contact
      </Link>

      <Link to="/sale" className="link">
        Sale
      </Link>
    </nav>
    <div></div>
    </div>
 
  );
}

export default Shop;
