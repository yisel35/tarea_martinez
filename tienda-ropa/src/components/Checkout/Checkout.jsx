import React from 'react';
import Brief from './Brief';
import CheckoutForm from './CheckoutForm';
import './Checkout.css';

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