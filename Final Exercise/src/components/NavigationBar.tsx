import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import '../App.css'

export default function NavigationBar() {
  return (
    <div className='mainBar'>
        <nav className='HomeAndAbout'>
            <NavLink  to="/">Home Page</NavLink>
            <NavLink to="/about">About Page</NavLink>
        </nav>

            <Outlet /> 
        
    </div>
  )
}

