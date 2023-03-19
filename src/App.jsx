
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Loging from './pages/Loging'


function App() {
  const [show, setShow] = useState(false);
  
  

  return (
    <div className="App ">
      <Navbar
      show={show}
      setShow={setShow}
      />
    
      <Routes>
      <Route exact path="/" element={<Home 
      show={show}
      setShow={setShow}
      />}/>
      <Route exact path="/login" element={<Loging/>}/>
      </Routes>
      
    </div>
  )
}

export default App
