import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to='/' className={(e)=>{return e.isActive?"blue":""}}><li>Home</li></NavLink>
        <NavLink to='/about' className={(e)=>{return e.isActive?"blue":""}}><li>About Us</li></NavLink>
        <NavLink to='/login' className={(e)=>{return e.isActive?"blue":""}}><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
