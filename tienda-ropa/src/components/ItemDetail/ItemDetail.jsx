import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';
import { useCart } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-detail" style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ width: '100%' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </div>
        
        <div style={{ width: '100%' }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: '300', 
            letterSpacing: '1px', 
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            {product.name}
          </h2>
          
          <p className="price" style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px' 
          }}>
            ${product.price.toFixed(2)}
          </p>
          
          <Description text={product.description} />
          
          <div className="selector-container" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <ItemQuantitySelector 
              quantity={quantity} 
              setQuantity={setQuantity}
              maxStock={product.stock}
            />
            
            <AddItemButton 
              onAdd={handleAddToCart} 
              disabled={product.stock === 0}
            />
          </div>
          
          {product.stock > 0 ? (
            <p className="stock" style={{ fontSize: '0.9rem' }}>
              Disponibles: {product.stock}
            </p>
          ) : (
            <p className="out-of-stock" style={{ 
              fontSize: '0.9rem', 
              color: '#e00' 
            }}>
              AGOTADO
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;