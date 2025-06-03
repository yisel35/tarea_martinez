import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import Brief from './Brief';

const Checkout = () => {
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleOrderComplete = () => {
    setOrderCompleted(true);
  };

  const wrapperStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '600px',
  };

  const thanksStyle = {
    textAlign: 'center',
    padding: '60px 30px',
    backgroundColor: '#f8e1f4',
    borderRadius: '12px',
    marginTop: '100px',
    maxWidth: '600px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const h3Style = {
    color: '#d63384',
    fontSize: '28px',
    marginBottom: '10px',
  };

  const pStyle = {
    marginTop: '10px',
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.5',
  };

  return (
    <div style={wrapperStyle}>
      <h2>Finalizar Compra</h2>

      {orderCompleted ? (
        <div style={thanksStyle}>
          <h3 style={h3Style}>¡Gracias por tu compra!</h3>
          <p style={pStyle}>Te enviaremos un correo con los detalles del pedido.</p>
        </div>
      ) : (
        <div style={containerStyle}>
          <CheckoutForm onConfirm={handleOrderComplete} />
          <Brief />
        </div>
      )}
    </div>
  );
};

export default Checkout;

