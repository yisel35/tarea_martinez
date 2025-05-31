import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader'; // Asegúrate de tener este componente
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
  
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        
        const mockProducts = [
          { 
            id: 1, 
            name: 'Conjunto Mujer Primavera', 
            price: 49.99, 
            description: 'Conjunto elegante para mujer con tejido transpirable', 
            category: 'mujer',
            image: '/conjunto-mujer.jpg',
            stock: 8
          },
          { 
            id: 2, 
            name: 'Conjunto Hombre Casual', 
            price: 59.99, 
            description: 'Conjunto moderno para hombre en algodón orgánico', 
            category: 'hombre',
            image: '/conjunto-hombre.jpg',
            stock: 12
          },
          { 
            id: 3, 
            name: 'Zapatos de Cuero', 
            price: 79.99, 
            description: 'Zapatos elegantes de cuero genuino para cualquier ocasión', 
            category: 'zapatos',
            image: '/zapatos-cuero.jpg',
            stock: 5
          },
          
        ];
        
        const foundProduct = mockProducts.find(p => p.id === parseInt(itemId));
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="item-detail-container" style={{ minHeight: '70vh' }}>
      {loading ? <Loader /> : product ? <ItemDetail product={product} /> : <p style={{ textAlign: 'center', padding: '40px' }}>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;