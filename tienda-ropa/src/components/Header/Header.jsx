import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Tienda Ropa</Link>
      <nav className={styles.nav}>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/zapatos">Zapatos</Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
