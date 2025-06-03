import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/ProductCard'; 
import  './ItemListContainer.module.css'



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    getProducts()
      .then(response => {
        if (categoryId) {
          const filteredProducts = response.filter(
            prod => prod.category === categoryId
          );
          setProducts(filteredProducts);
        } else {
          setProducts(response);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="item-list-container" style={{ padding: '40px 20px' }}>
      <h2 style={{ 
        textAlign: 'center', 
        fontWeight: '300', 
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '30px',
        paddingBottom: '10px',
        borderBottom: '1px solid #eee'
      }}>
        {greeting || `Productos ${categoryId ? `de ${categoryId}` : ''}`}
      </h2>
      
      {loading ? 
        <div style={{ 
          textAlign: 'center', 
          padding: '40px',
          fontSize: '1.1rem'
        }}>
          Cargando productos...
        </div> : 
        <ItemList products={products} />
      }
    </div>
  );
};

export default ItemListContainer;