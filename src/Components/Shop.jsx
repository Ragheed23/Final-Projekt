import React, { useState } from "react";
import "./Shop.css";
import data from "../../db.json";
function Shop() {
  const articles = data.products;
  console.log(articles);
  const [filter, setFilter] = useState("");
  const filteredProducts = articles.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  const kaufen = (name) => {
    alert(`Der Artikel ${name} wurde in den Warenkorb gelegt`);
  };
  return (
    <div className="shopContainer">
      {/* GESAMTER CONTENT CONTAINER */}
      <div className="container">
        <div className="rabatt">BIS ZU 40% RABATT</div>
        <div className="winner">BENUTZE DEN CODE : WINNER</div>
      </div>

      <div className="btn">
        <div className="btn-internal">
          <button onClick={() => setFilter("Herren")}>Herren</button>
        </div>
        <div className="btn-internal">
          <button onClick={() => setFilter("Damen")}>Damen</button>
        </div>
        <div className="btn-internal">
          <button onClick={() => setFilter("Kinder")}>Kinder</button>
        </div>
        <div className="btn-internal">
          <button onClick={() => setFilter("Kappen")}>Kappen</button>
        </div>
        <div className="btn-internal">
          <button onClick={() => setFilter("Accessoires")}>Accessoires</button>
        </div>
        <div className="btn-internal">
          <button onClick={() => setFilter("")}>Alles</button>
        </div>
      </div>

      {/* KARTEN CONTAINER */}
      <div className="cardContainer">
        {/* hier durch Datenbank durchschleifen und Karten generieren */}
        {filteredProducts.map((article) => (
          <div className="karten" key={article.id}>
            <img src={article.url} alt="picture" />

            <p className="product">{article.title}</p>
            <p> für {article.category}</p>
            <p> {article.description}</p>

            <div className="priceRow">
              <p>Preis:</p>

              <p className="priceRow-p">{article.price_old} €</p>
              <p>{article.price} €</p>
            </div>

            <button onClick={() => kaufen(article.title)}>Kaufen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
