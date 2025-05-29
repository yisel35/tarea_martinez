const ItemDetail = ({ producto }) => {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px' }} />
      <div>
        <h2>{producto.nombre}</h2>
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemDetail
