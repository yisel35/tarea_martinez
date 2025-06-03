import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'; 


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className="content-container" style={{ paddingTop: '80px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos Destacados" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;