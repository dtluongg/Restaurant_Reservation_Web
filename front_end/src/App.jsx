import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Homepage from './pages/Homepage' 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App