import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la tienda de ropa!" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
