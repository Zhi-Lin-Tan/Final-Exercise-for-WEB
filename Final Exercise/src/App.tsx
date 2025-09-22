import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> }
    ]
  }
])

export default function App() {
  return (
    <>
      <h1 className='theme'>Welcome to My Homepage</h1>
      <RouterProvider router={router} />
    </>
  )
}
