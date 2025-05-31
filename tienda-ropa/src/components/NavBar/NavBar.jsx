import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 border-bottom fixed-top">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          MARTÍNEZ KIM
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/category/mujer" className="px-3 text-uppercase">Ropa Mujer</Nav.Link>
            <Nav.Link href="/category/hombre" className="px-3 text-uppercase">Ropa Hombre</Nav.Link>
            <Nav.Link href="/category/zapatos" className="px-3 text-uppercase">Zapatos</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href="#cuenta" className="px-2">
              <i className="bi bi-person fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#carrito" className="px-2 position-relative">
              <i className="bi bi-bag fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark" 
                    style={{fontSize: '0.6rem', padding: '0.15rem 0.35rem'}}>
                0
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;