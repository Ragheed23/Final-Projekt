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

  const kaufen = (id) => {
    alert(`Du hast das Produkt mit der ID ${id} gewählt`);
  };
  return (
    <div className="shopContainer">
      {/* GESAMTER CONTENT CONTAINER */}
      <div className="container">
        <div className="rabatt">BIS ZU 40% RABATT</div>
        <div className="winner">BENUTZE DEN CODE : WINNER</div>
      </div>

      <div className="btn">
        <button onClick={() => setFilter("Herren")}>Herren</button>
        <button onClick={() => setFilter("Damen")}>Damen</button>
        <button onClick={() => setFilter("Kinder")}>Kinder</button>
        <button onClick={() => setFilter("Kappen")}>Kappen</button>
        <button onClick={() => setFilter("Accessoires")}>Accessoires</button>
        <button onClick={() => setFilter("")}>Züruck</button>
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
              <p>{article.price} €</p>
              <p className="priceRow-p">{article.price_old}</p>
            </div>

            <button onClick={() => kaufen(article.id)}>Kaufen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
