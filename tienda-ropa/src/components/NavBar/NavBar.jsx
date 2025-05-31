import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Cart } from 'react-bootstrap-icons';

// Estilos en el mismo archivo (CSS-in-JS) como solución temporal
const navbarStyles = {
  navbar: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #eaeaea',
    padding: '15px 0'
  },
  navLink: {
    color: '#000',
    letterSpacing: '1px',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    padding: '0 15px',
    textDecoration: 'none'
  },
  navLinkHover: {
    color: '#555'
  },
  cartBadge: {
    fontSize: '0.6rem',
    padding: '4px 6px',
    top: '-5px',
    right: '-10px',
    backgroundColor: '#dc3545'
  }
};

const AppNavbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" style={navbarStyles.navbar} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
          MARTÍNEZ KIM
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/category/mujer" 
              style={navbarStyles.navLink}
            >
              Ropa Mujer
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/category/hombre" 
              style={navbarStyles.navLink}
            >
              Ropa Hombre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/category/zapatos" 
              style={navbarStyles.navLink}
            >
              Zapatos
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/cart" 
              style={{ ...navbarStyles.navLink, position: 'relative' }}
            >
              <Cart size={24} />
              {totalItems > 0 && (
                <span 
                  className="position-absolute badge rounded-pill"
                  style={navbarStyles.cartBadge}
                >
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