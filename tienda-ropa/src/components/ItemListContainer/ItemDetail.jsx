import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <Description text={item.description} />
      <ItemQuantitySelector />
      <AddItemButton item={item} />
    </div>
  );
};

export default ItemDetail;