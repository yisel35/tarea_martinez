import React from 'react';
import { useCart } from '../../context/CartContext';

const AddItemButton = ({ item }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(item, 1); 
  };

  return <button onClick={handleAdd}>Agregar al carrito</button>;
};

export default AddItemButton;