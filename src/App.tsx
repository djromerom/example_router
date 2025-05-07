
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'

function App() {


  return (
    <div>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:name" element={<Product />}>
          <Route path='detail' element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
