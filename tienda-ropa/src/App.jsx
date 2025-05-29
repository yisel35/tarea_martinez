import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import About from './pages/About'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a la tienda de ropa!" />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App