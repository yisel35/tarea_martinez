// components/ProductCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  return (
    <Card className="border-0 rounded-0 mb-4" style={{ width: '100%' }}>
      <div className="position-relative" style={{ height: '350px', overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          className="rounded-0"
          style={{ 
            height: '100%', 
            width: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
        <Button 
          variant="dark" 
          className="position-absolute bottom-0 start-0 w-100 rounded-0 py-2"
          style={{ 
            fontSize: '0.8rem',
            transform: 'translateY(100%)',
            transition: 'transform 0.3s ease',
            opacity: 0.9
          }}
        >
          AÑADIR AL CARRITO
        </Button>
      </div>
      <Card.Body className="px-0 py-3">
        <Card.Title className="mb-1 fw-light text-uppercase" style={{ fontSize: '1rem' }}>
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
          {product.description}
        </Card.Text>
        <Card.Text className="mb-0 fw-bold" style={{ fontSize: '0.95rem' }}>
          ${product.price.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;