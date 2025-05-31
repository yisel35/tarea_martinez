import React from 'react';

const ItemQuantitySelector = ({ quantity, setQuantity, maxStock }) => {
  const increment = () => {
    if (quantity < maxStock) setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="quantity-selector" style={{
      display: 'flex',
      border: '1px solid #ddd',
      width: 'fit-content'
    }}>
      <button 
        onClick={decrement} 
        disabled={quantity <= 1}
        style={{
          background: '#fff',
          border: 'none',
          padding: '8px 15px',
          cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
          opacity: quantity <= 1 ? 0.5 : 1
        }}
      >
        -
      </button>
      
      <span style={{
        padding: '8px 20px',
        borderLeft: '1px solid #ddd',
        borderRight: '1px solid #ddd'
      }}>
        {quantity}
      </span>
      
      <button 
        onClick={increment} 
        disabled={quantity >= maxStock}
        style={{
          background: '#fff',
          border: 'none',
          padding: '8px 15px',
          cursor: quantity >= maxStock ? 'not-allowed' : 'pointer',
          opacity: quantity >= maxStock ? 0.5 : 1
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;