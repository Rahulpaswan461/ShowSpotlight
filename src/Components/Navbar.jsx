import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

function Navbar(){
    const [visible,setVisible]=useState(false)
    const auth=useAuth()
     return (
       <div className="header">
       <div className="heading">
        <h1>New Era</h1>
       </div>
       <div className="nav">
        <NavLink to='/' className="nav-links" >Home</NavLink>
        <NavLink to='/About' className="nav-links">About</NavLink>
        <NavLink to='/Contact' className="nav-links">Contact</NavLink>
        <NavLink to='/profile' className="nav-links">Profile</NavLink>
        {
            !auth.user && <NavLink to='/login' className="nav-links">Login</NavLink>
        }
        </div> 
        <div className="icon-design">
        <i class="fa-solid fa-bars"></i>
        </div>
       </div>
     )
}
export default Navbar