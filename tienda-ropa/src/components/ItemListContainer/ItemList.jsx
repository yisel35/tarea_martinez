import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
      {productos.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default ItemList
