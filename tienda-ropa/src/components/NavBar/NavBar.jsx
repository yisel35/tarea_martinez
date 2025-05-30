import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  const categories = [
    { id: 'hombre', name: 'Ropa Hombre' },
    { id: 'mujer', name: 'Ropa Mujer' },
    { id: 'accesorios', name: 'Accesorios' }
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/logo.png" alt="Tienda de Ropa" />
      </Link>
      
      <ul className="nav-links">
        {categories.map(category => (
          <li key={category.id}>
            <NavLink 
              to={`/category/${category.id}`} 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      
      <div className="cart-section">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;