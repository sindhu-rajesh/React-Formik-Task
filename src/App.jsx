//import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './assets/utils/AppRoutes'
//import ApiService from './assets/utils/ApiService'
//import axios from 'axios'

function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  </>
}

export default App