import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Cart } from 'react-bootstrap-icons';
import styles from './NavBar.module.css';

const AppNavbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" className={styles.navbar} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          MARTÍNEZ KIM
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className={styles.toggleButton}
        />
        
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/category/mujer" 
              className={styles.navLink}
            >
              Ropa Mujer
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/category/hombre" 
              className={styles.navLink}
            >
              Ropa Hombre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/category/zapatos" 
              className={styles.navLink}
            >
              Zapatos
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/cart" 
              className={`${styles.navLink} ${styles.cartLink}`}
            >
              <Cart size={24} />
              {totalItems > 0 && (
                <span className={styles.cartBadge}>
                  {totalItems}
                </span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;