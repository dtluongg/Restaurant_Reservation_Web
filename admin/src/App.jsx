import React, { useEffect, useState } from 'react'
import Login from './components/Login.jsx'
import Sidebar from './components/Sidebar.jsx'
import AddMenu from './pages/AddMenu.jsx'
import ListMenu from './pages/ListMenu.jsx'
import AdminTable from './pages/AdminTable.jsx'
import { Route, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

export const backendUrl = "http://localhost:4000"

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token' || ""))

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])


  return (
    <div> 
      <ToastContainer />
      { !token ?  (
        <Login setToken={setToken} />
      ) : (
          <>
            <div className='flex w-full'>
               <Sidebar setToken={setToken}/>
               <div className='w-[70%] ml-[max(5vw, 25px)] py-8 text-black text-base'>
                  <Routes>
                    <Route path='/add' element={<AddMenu token={token} /> } />
                    <Route path='/list' element={<ListMenu token={token} /> } />
                    <Route path='/table' element={<AdminTable token={token} /> } />
                  </Routes>
               </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default App