
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Loging from './pages/Loging'
import Footer from './components/Footer'
import AllProducts from './pages/AllProducts'


function App() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    id: "",
    description: "",
  });
  
  

  return (
    <div className="App ">
      <Navbar
      show={show}
      setShow={setShow}
      />
    
      <Routes>
      <Route exact path="/" element={<Home 
      product={product}
      setProduct={setProduct}
      show={show}
      setShow={setShow}
      />}/>
      <Route exact path="/login" element={<Loging setShowLogin={setShowLogin} 
    
      />}/>
      <Route exact path="/allproducts" element={<AllProducts
      setProduct={setProduct}
      product={product}
      show={show}
      setShow={setShow}
      />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
