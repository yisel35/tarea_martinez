import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;