import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Elimina BrowserRouter de aquí
import AppNavbar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div style={{ paddingTop: '80px' }}> 
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos Destacados" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;