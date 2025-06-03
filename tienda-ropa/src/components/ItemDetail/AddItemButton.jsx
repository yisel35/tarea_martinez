import { useCart } from '../../context/CartContext';
import styles from './AddItemButton.module.css';

const AddItemButton = ({ product, quantity }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    if (product && quantity > 0) {
      addToCart(product, quantity);
      alert(`${quantity} x ${product.name} agregado(s) al carrito`);
    }
  };

  return (
    <button 
      className={styles.button} 
      onClick={handleClick}
      disabled={quantity < 1}
    >
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;