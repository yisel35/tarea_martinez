import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const productos = [
  { id: '1', nombre: 'Remera básica', precio: 4500, imagen: 'https://via.placeholder.com/300', descripcion: 'Remera 100% algodón' },
  { id: '2', nombre: 'Jeans skinny', precio: 8500, imagen: 'https://via.placeholder.com/300', descripcion: 'Jeans elastizados modernos' },
  { id: '3', nombre: 'Campera de cuero', precio: 12000, imagen: 'https://via.placeholder.com/300', descripcion: 'Campera premium sintética' }
]

const ItemDetailContainer = () => {
  const { id } = useParams()
  const producto = productos.find(p => p.id === id)

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Producto no encontrado</p>}
    </div>
  )
}

export default ItemDetailContainer
