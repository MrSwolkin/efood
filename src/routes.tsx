import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ProductPage/:id" element={<ProductPage />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
