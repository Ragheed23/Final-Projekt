import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import data from "../../db.json";
function Shop() {
  const articles = data.products;
  console.log(articles);

  const kaufen = (id) => {
    alert(`Du hast das Produkt mit der ID ${id} gewählt`);
  };
  return (
    <div>

      {/* GESAMTER CONTENT CONTAINER */}
      <div className="container">
        <div className="rabatt">BIS ZU 40% RABATT</div>
        <div className="winner">BENUTZE DEN CODE : WINNER</div>
      </div>
      
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
      
      {/* KARTEN CONTAINER */}
      <div className="cardContainer">
        {/* hier durch Datenbank durchschleifen und Karten generieren */}
        {articles.map((article) => (
          <div className="karten" key={article.id}>
            <img src={article.url} alt="picture" />

            <p className="product">{article.title}</p>
            <p> für {article.category}</p>
            <p> {article.description}</p>

            <div className="pricerow">
              <p>Preis:</p>
              <p>{article.price} €</p>
              <p>{article.price_old}</p>
            </div>

            <button onClick={() => kaufen(article.id)}>Kaufen</button>
          </div>
        ))}

     
      </div>
    </div>
  );
}

export default Shop;
