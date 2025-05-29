import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/detalle/${id}`}>Ver más</Link>
    </div>
  )
}

export default Item
