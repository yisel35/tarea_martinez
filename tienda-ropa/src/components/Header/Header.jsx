import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Tienda de Ropa</Link>
        <Link to='/category/hombre'>Hombre</Link>
        <Link to='/category/mujer'>Mujer</Link>
        <CartWidget />
      </nav>
    </header>
  );
};

export default Header;
