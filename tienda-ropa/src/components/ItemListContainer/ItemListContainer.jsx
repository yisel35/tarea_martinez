import ItemList from './ItemList'

const productos = [
  { id: '1', nombre: 'Remera básica', precio: 4500, imagen: 'https://via.placeholder.com/200' },
  { id: '2', nombre: 'Jeans skinny', precio: 8500, imagen: 'https://via.placeholder.com/200' },
  { id: '3', nombre: 'Campera de cuero', precio: 12000, imagen: 'https://via.placeholder.com/200' }
]

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </section>
  )
}

export default ItemListContainer
