import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la Tienda de Ropa" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
        </Routes>
      </div>
      <footer className="footer">
        Tienda de Ropa  {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;