import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const productos = [
  { id: 1, name: 'Remera', category: 'hombre', price: 2000 },
  { id: 2, name: 'Vestido', category: 'mujer', price: 3500 },
  { id: 3, name: 'Camisa', category: 'hombre', price: 3000 },
];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filtered = categoryId
      ? productos.filter((prod) => prod.category === categoryId)
      : productos;
    setItems(filtered);
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
