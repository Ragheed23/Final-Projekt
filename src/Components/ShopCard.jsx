

import React from 'react';

// Beispiel für eine Shop-Kartenkomponente
const ShopCard = ({ image, title, description, price }) => {
  return (
    <div className="shop-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      {/* Weitere Inhalte oder Aktionen für die Karte können hier hinzugefügt werden */}
    </div>
  );
};

export default ShopCard;