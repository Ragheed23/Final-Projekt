import React from "react";
import { Link } from "react-router-dom"


function Shop() {
  return (
    <div>
      {/* <div>
      <Link to="/herren" className="link">HERREN</Link>
       
       <Link to="/damen" className="link">DAMEN</Link>
       
       <Link to="/kinder" className="link">KINDER</Link>
       
       <Link to="/kappen" className="link">KAPPEN</Link>
       
       <Link to="/accessoires" className="link">ACCESSOIRES</Link>

      </div>
         */}
      


      <div className="rabatt">
        BIS ZU 40% RABATT
        <div>Benutze den Code: Winner</div>
      </div>
    </div>
  );
}

export default Shop;
