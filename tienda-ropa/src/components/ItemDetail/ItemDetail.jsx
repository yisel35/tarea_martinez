import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';
import { useCart } from '../../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <div className="item-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <Description text={product.description} />
        
        <div className="selector-container">
          <ItemQuantitySelector 
            quantity={quantity} 
            setQuantity={setQuantity}
            maxStock={product.stock}
          />
          <AddItemButton 
            onAdd={handleAddToCart} 
            disabled={product.stock === 0}
          />
        </div>
        
        {product.stock > 0 ? (
          <p className="stock">Disponibles: {product.stock}</p>
        ) : (
          <p className="out-of-stock">AGOTADO</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;