import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulación de API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockProducts = [
          { id: 1, name: 'Camisa Hombre', price: 29.99, category: 'hombre', image: '/camisa-hombre.jpg' },
          { id: 2, name: 'Pantalón Mujer', price: 49.99, category: 'mujer', image: '/pantalon-mujer.jpg' },
          // ...más productos
        ];
        
        const filteredProducts = categoryId 
          ? mockProducts.filter(p => p.category === categoryId)
          : mockProducts;
          
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Productos de ${categoryId}` : 'Todos los Productos'}</h2>
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;