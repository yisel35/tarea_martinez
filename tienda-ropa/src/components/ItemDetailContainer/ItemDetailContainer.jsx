import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


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
            name: 'Camisa Hombre Premium', 
            price: 39.99, 
            description: 'Camisa de algodón 100% de alta calidad', 
            category: 'hombre',
            image: '/camisa-hombre.jpg',
            stock: 10
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
    <div className="item-detail-container">
      {loading ? <Loader /> : product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;