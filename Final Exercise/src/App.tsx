import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import './App.css'
import DetailOfSession from './components/session/DetailOfSession'
import JoinSession from './components/session/joinSession'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "session/:id", element: <DetailOfSession /> },
      { path: "session/:id/join", element: <JoinSession /> }
    ]
  }
])

export default function App() {
  return (
    <>
      <h1 className='theme'>Welcome to the Hobby Section</h1>
      <RouterProvider router={router} />
    </>
  )
}
