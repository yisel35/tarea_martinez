// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MARTÍNEZ KIM</div>
      <div className="categories">
        <a href="#mujer">ROPA MUJER</a>
        <a href="#hombre">ROPA HOMBRE</a>
        <a href="#zapatos">ZAPATOS</a>
      </div>
      <div className="icons">
        <button className="icon-btn">👤</button>
        <button className="icon-btn">🛒<span className="cart-count">0</span></button>
      </div>
    </nav>
  );
};

export default Navbar;