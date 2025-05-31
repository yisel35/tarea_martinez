// App.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from './components/NavBar/NavBar';
import ProductCard from './mock/ProductCard';
import './App.css';


const products = {
  mujer: [
    {
      id: 1,
      name: 'Conjunto Mujer 1',
      description: 'Vestido de verano con estampado floral',
      price: 33.99,
      image: '/tienda-ropa/public/ropa_mujer.jpg.jpg'
    },
    {
      id: 2,
      name: 'Conjunto Mujer 2',
      description: 'Blusa y falda coordinadas',
      price: 45.99,
      image: '/tienda-ropa/public/ropa_mujer.jpg.jpg'
    },
    {
      id: 3,
      name: 'Conjunto Mujer 3',
      description: 'Traje elegante para ocasiones especiales',
      price: 59.99,
      image: '/tienda-ropa/public/ropa_mujer3.jpg.jpg'
    }
  ],
  hombre: [
    {
      id: 4,
      name: 'Conjunto Hombre 1',
      description: 'Camisa y pantalón de vestir',
      price: 49.99,
      image: '/tienda-ropa/public/ropa_hombre.jpg.jpg'
    },
    {
      id: 5,
      name: 'Conjunto Hombre 2',
      description: 'Chaqueta y jeans casuales',
      price: 65.99,
      image: '/tienda-ropa/public/ropa_hombre2.jpg.jpg'
    },
    {
      id: 6,
      name: 'Conjunto Hombre 3',
      description: 'Traje formal para eventos',
      price: 89.99,
      image: '/tienda-ropa/public/ropa_hombre3.jpg.jpg'
    }
  ],
  zapatos: [
    {
      id: 7,
      name: 'Zapatos Elegantes',
      description: 'Zapatos de vestir para hombre y mujer',
      price: 79.99,
      image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Zapatos+1'
    },
    {
      id: 8,
      name: 'Zapatos Casuales',
      description: 'Zapatos cómodos para el día a día',
      price: 55.99,
      image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Zapatos+2'
    },
    {
      id: 9,
      name: 'Deportivos',
      description: 'Zapatillas para deporte y ejercicio',
      price: 65.99,
      image: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Zapatos+3'
    }
  ]
};

function App() {
  return (
    <div className="App">
      <AppNavbar />
      
      <Container className="py-5">
        {/* Sección Mujer */}
        <h2 className="mb-4 text-uppercase fw-light border-bottom pb-2">Ropa de Mujer</h2>
        <Row className="mb-5">
          {products.mujer.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        
        {/* Sección Hombre */}
        <h2 className="mb-4 text-uppercase fw-light border-bottom pb-2">Ropa de Hombre</h2>
        <Row className="mb-5">
          {products.hombre.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        
        {/* Sección Zapatos */}
        <h2 className="mb-4 text-uppercase fw-light border-bottom pb-2">Zapatos</h2>
        <Row>
          {products.zapatos.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;