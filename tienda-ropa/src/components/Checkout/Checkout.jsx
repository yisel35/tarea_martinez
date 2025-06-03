import Brief from './Brief';
import './Checkout.module.css';
import CheckoutForm from './CheckoutForm'; // asegurate que la ruta sea correcta


const Checkout = () => {
  return (
    <div className="checkout-page">
      <h2>Finalizar Compra</h2>
      <div className="checkout-container">
        <CheckoutForm />
        <Brief />
      </div>
    </div>
  );
};

export default Checkout;