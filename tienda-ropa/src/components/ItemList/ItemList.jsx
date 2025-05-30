import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <div key={product.id} className="item-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/item/${product.id}`} className="detail-button">
            Ver Detalle
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;