import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#f8f8f8' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h2>Tienda de Ropa</h2>
      </Link>
      <CartWidget />
    </header>
  )
}

export default Header
