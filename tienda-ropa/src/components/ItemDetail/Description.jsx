import React from 'react';
import styles from './Description.module.css';

const Description = ({ product }) => {
  return (
    <div className={styles.description}>
      <h3>Descripción</h3>
      <p>{product.description}</p>
      
      <h3>Características</h3>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;