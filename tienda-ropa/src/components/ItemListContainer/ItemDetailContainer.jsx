import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const productos = [
  { id: 1, name: 'Remera', category: 'hombre', price: 2000, description: 'Remera de algodón' },
  { id: 2, name: 'Vestido', category: 'mujer', price: 3500, description: 'Vestido elegante' },
  { id: 3, name: 'Camisa', category: 'hombre', price: 3000, description: 'Camisa de lino' },
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = productos.find((p) => p.id === parseInt(itemId));
    setItem(foundItem);
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;