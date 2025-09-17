import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import Navigation from './Navigation'

export default function NavigationBar() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/about",
            element: <AboutPage />
        }
    ])

  return (
    <div>
        <Navigation />
        <RouterProvider router={router} />
    </div>

  )
}
