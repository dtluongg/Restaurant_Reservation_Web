import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Homepage from './pages/Homepage' 
import { ToastContainer } from 'react-toastify'

// export const backendUrl = "http://localhost:4000"
export const backendUrl = import.meta.env.VITE_BACKEND_URL


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App