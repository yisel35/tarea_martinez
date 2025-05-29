import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './pages/Checkout/Checkout'

function App() {
  return (
    <>
      <Header />
      <H1>HOLA MUNDO</H1>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la tienda de ropa!" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
