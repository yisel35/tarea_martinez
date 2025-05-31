import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="item-list" style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      padding: '20px 0'
    }}>
      {products.map(product => (
        <div key={product.id} className="item-card" style={{
          width: '300px',
          textAlign: 'center',
          transition: 'transform 0.3s ease'
        }}>
          <Link to={`/item/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              height: '400px', 
              overflow: 'hidden',
              marginBottom: '15px'
            }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <h3 style={{ 
              fontSize: '1rem', 
              fontWeight: '400', 
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: '10px 0'
            }}>
              {product.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              ${product.price.toFixed(2)}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;