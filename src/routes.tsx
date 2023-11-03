import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ProductPage/:id" element={<ProductPage />} />
  </Routes>
)

export default Rotas
