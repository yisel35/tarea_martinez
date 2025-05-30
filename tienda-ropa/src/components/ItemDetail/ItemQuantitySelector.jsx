import React from 'react';

const ItemQuantitySelector = ({ quantity, setQuantity, maxStock }) => {
  const increment = () => {
    if (quantity < maxStock) setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="quantity-selector">
      <button onClick={decrement} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={increment} disabled={quantity >= maxStock}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;