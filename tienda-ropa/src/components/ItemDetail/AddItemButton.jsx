import React from 'react';
import styles from './AddItemButton.module.css';

const AddItemButton = ({ onClick, disabled }) => {
  return (
    <button 
      className={styles.button} 
      onClick={onClick}
      disabled={disabled}
    >
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;