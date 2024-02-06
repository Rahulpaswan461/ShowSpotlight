import React from 'react'
import { useNavigate } from 'react-router-dom'

function Features(){
    const navigate=useNavigate()
    const handleclick=()=>{
         navigate('/')
    }
    return (
        <>
        <h1>The Features component</h1>
        <button onClick={handleclick}>BACK</button>
        </>
    )
}
export default Features