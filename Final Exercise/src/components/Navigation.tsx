import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/about">About Page</NavLink>
    </div>
  )
}
