import React from "react";
import { Link } from "react-router-dom";
// import "./Shop.css";
import data from "../../db.json"

function Shop() {
  const products = data.articles
  console.log(products)
  const kaufen = (e) => {};
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
        {products.map((product) =>{
              <p key={product.id}>
              {product.id}

              {product.title}  

              {product.price}  

              {product.img}

              {product.category}    
            </p>

        })};
        {/* Item1 */}
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">alt: 75€</p>
            <p className="price">neu: 35€</p>
          </div>
          <button onClick={kaufen}>Kaufen</button>
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
            <p className="priceOld">alt: 75€</p>
            <p className="price">neu: 35€</p>
          </div>
          <button onClick={kaufen}>kaufen</button>
        </div>
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">alt: 75€</p>
            <p className="price">neu: 35€</p>
          </div>
          <button onClick={kaufen}>kaufen</button>
        </div>
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">alt: 75€</p>
            <p className="price">neu: 35€</p>
          </div>
          <button onClick={kaufen}>kaufen</button>
        </div>
        <div className="karten">
          <img
            src="./Prodacts/fc-bayern-adidas-Herren T-shirt-2023-24.jpg"
            alt=""
          />
          <p className="product">T-Shirt</p>
          <p>Price:</p>
          <div className="priceRow">
            <p className="priceOld">alt: 75€</p>
            <p className="price">neu: 35€</p>
          </div>
          <button onClick={kaufen}>kaufen</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
