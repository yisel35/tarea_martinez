import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const cartStyles = {
    container: {
      minHeight: '70vh',
      padding: '40px 0'
    },
    table: {
      marginBottom: '30px'
    },
    productImage: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      marginRight: '15px'
    },
    totalContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px'
    }
  };

  return (
    <Container style={cartStyles.container}>
      <h2 className="mb-4">Tu Carrito</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <p>Tu carrito está vacío</p>
          <Link to="/" className="btn btn-dark mt-3">Ver productos</Link>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive style={cartStyles.table}>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={cartStyles.productImage}
                      />
                      {item.name}
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          <div style={cartStyles.totalContainer}>
            <h4>Total: ${cartTotal.toFixed(2)}</h4>
            <div>
              <Button variant="outline-secondary" className="me-2" onClick={clearCart}>
                Vaciar Carrito
              </Button>
              <Button variant="dark" as={Link} to="/checkout">
                Finalizar Compra
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;