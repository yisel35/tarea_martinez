import React from 'react';
import styles from './Loader.module.css';

const Loader = ({ size = 'medium', color = 'primary', message }) => {
  // Determinar clase de tamaño
  const sizeClass = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  }[size] || styles.medium;

  // Determinar clase de color
  const colorClass = {
    primary: styles.spinnerPrimary,
    secondary: styles.spinnerSecondary,
    dark: styles.spinnerDark
  }[color] || styles.spinnerPrimary;

  return (
    <div className={styles.loaderContainer}>
      <div className={`${styles.spinner} ${sizeClass} ${colorClass}`}></div>
      
      {message && (
        <div className={styles.message}>{message}</div>
      )}
    </div>
  );
};

export default Loader;