import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      🛒
      <span style={{ marginLeft: '5px' }}>{totalQuantity() || 0}</span>
    </div>
  );
};

export default CartWidget;
