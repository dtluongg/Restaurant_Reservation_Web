import React from 'react'
import Login from './components/Login.jsx'

export const backendUrl = "http://localhost:4000"

const App = () => {
  return (
    <div> 
      <Login />
    </div>
  )
}

export default App