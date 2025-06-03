
import styles from './ItemQuantitySelector.module.css';

const ItemQuantitySelector = ({ quantity = 1, onIncrement, onDecrement }) => {
  return (
    <div className={styles.quantitySelector}>
      <span className={styles.label}>Cantidad:</span>
      <div className={styles.controls}>
        <button 
          className={styles.button} 
          onClick={onDecrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button 
          className={styles.button} 
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemQuantitySelector;