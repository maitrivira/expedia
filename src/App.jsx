import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home"
import AboutUs from "./AboutUs/AboutUs"
import Products from './Products/Products'
import ProductDetail from './ProductDetail/ProductDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/detail/:id' element={<ProductDetail/>} />
    </Routes> 
  )
}

export default App
