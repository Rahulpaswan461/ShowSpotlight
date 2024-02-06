import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About(){
     return (
        <div>
         <h1>The About component</h1>
         <Link to='features'>Features</Link>
         <Outlet/>
        </div>
     )
}
export default About