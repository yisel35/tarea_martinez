import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/products'; 

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
        <div className="item-list-container">
            <h2>{greeting || `Productos ${categoryId ? `de ${categoryId}` : ''}`}</h2>
            {loading ? 
                <div className="loader">Cargando productos...</div> : 
                <ItemList products={products} />
            }
        </div>
    );
};

export default ItemListContainer;