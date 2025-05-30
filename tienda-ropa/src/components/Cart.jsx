import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, cartTotal, removeFromCart, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="continue-shopping">
                    Continuar comprando
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Tu Carrito de Compras</h2>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="item-info">
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)} x {item.quantity}</p>
                            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="remove-btn"
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <div className="cart-actions">
                    <button onClick={clearCart} className="clear-btn">
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="checkout-btn">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;