import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const AddItemButton = ({ onAdd, disabled }) => {
  return (
    <button 
      className={`add-to-cart-btn ${disabled ? 'disabled' : ''}`} 
      onClick={onAdd}
      disabled={disabled}
    >
      <FaCartPlus /> Agregar al carrito
    </button>
  );
};

export default AddItemButton;