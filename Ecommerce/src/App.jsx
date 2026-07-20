import { useState } from 'react'
import './App.css'
import Login from './components/auth/login/login'
import {RouterProvider} from "react-router"
import router from './routes/router'

function App() {

  return (
    <>

      {
        <div className="basis-64 justify-center items-center h-15 bg-blue-500 shadow-xl">
           
        </div>

      }
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
