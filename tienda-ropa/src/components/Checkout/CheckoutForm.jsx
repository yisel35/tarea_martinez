import React, { useState } from 'react';
import './Checkout.module.css'
const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email) {
      onConfirm(); 
    } else {
      alert("Por favor completá todos los campos.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Correo:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Confirmar Compra</button>
    </form>
  );
};

export default CheckoutForm;
