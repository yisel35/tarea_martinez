import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to="/checkout" style={{ fontSize: '24px', textDecoration: 'none' }}>
      🛒
    </Link>
  )
}

export default CartWidget
