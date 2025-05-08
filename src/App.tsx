import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute><About /></ProtectedRoute>
        } />
        <Route path="/product/:name" element={
          <ProtectedRoute><Product /></ProtectedRoute>
        }>
          <Route path="detail" element={
            <ProtectedRoute><ProductDetail /></ProtectedRoute>
          } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App