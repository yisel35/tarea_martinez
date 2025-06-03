import { useCart } from '../../context/CartContext'; 
import './Brief.module.css';

const Brief = () => {
  const { cart, cartTotal, clearCart } = useCart();

  return (
    <div className="order-summary">
      <h3>Resumen de Pedido</h3>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total-section">
        <span>Total:</span>
        <span>${cartTotal.toFixed(2)}</span>
      </div>
      <button className="confirm-btn" onClick={clearCart}>
        Confirmar Compra
      </button>
    </div>
  );
};

export default Brief;