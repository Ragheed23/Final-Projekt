import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import ShopCard from "./ShopCard";

function Shop() {
  const warenkorb = (e) => {};
  return (
    <div>
      <nav>
        <Link to="/herren" className="shoplink">
          HERREN
        </Link>

        <Link to="/damen" className="shoplink">
          DAMEN
        </Link>

        <Link to="/kinder" className="shoplink">
          KINDER
        </Link>

        <Link to="/kappen" className="shoplink">
          KAPPEN
        </Link>

        <Link to="/accessoires" className="shoplink">
          ACCESSOIRES
        </Link>
      </nav>

      <div className="container">
        <div className="rabatt">BIS ZU 40% RABATT</div>
        <div className="winner">BENUTZE DEN CODE : WINNER</div>
      </div>

      <div>
        <img
          src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
          alt=""
        />
        <p className="product">T-Shirt</p>
        <p className="price">Price:75€</p>
        <p className="price">35€</p>
        <button onClick={warenkorb}>Warenkorb</button>
      </div>
    </div>
  );
}

export default Shop;
