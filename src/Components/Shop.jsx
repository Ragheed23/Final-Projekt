import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

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
      {/* GESAMTER CONTENT CONTAINER */}
      <div className="container">
        <div className="rabatt">BIS ZU 40% RABATT</div>
        <div className="winner">BENUTZE DEN CODE : WINNER</div>
      </div>
      {/* KARTEN CONTAINER */}
      <div className="cardContainer">
        {/* Item1 */}
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">75€</p>
            <p className="price">Neu: 35€</p>
          </div>
          <button onClick={warenkorb}>Warenkorb</button>
        </div>
        {/* Item2 */}
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">75€</p>
            <p className="price">Neu: 35€</p>
          </div>
          <button onClick={warenkorb}>Warenkorb</button>
        </div>
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">75€</p>
            <p className="price">Neu: 35€</p>
          </div>
          <button onClick={warenkorb}>Warenkorb</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
