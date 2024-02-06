import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
      return(
        <div className="navbar">
            <div className="logo">
             <Link to='/'><img src="https://images.unsplash.com/photo-1706349067986-433baf49d558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D" alt="" /></Link>
            </div>
            <div className="list-item">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
        </div>
      )
}
export default Navbar