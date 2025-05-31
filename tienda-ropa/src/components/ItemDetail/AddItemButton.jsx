import { FaCartPlus } from 'react-icons/fa';

const AddItemButton = ({ onAdd, disabled }) => {
  return (
    <button 
      className={`add-to-cart-btn ${disabled ? 'disabled' : ''}`} 
      onClick={onAdd}
      disabled={disabled}
      style={{
        background: '#000',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'all',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <FaCartPlus /> Agregar al carrito
    </button>
  );
};

export default AddItemButton;