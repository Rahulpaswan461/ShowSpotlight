import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function Login(){
    const [user,setUser]=useState('')
    const navigate=useNavigate()
    const auth=useAuth()
    const clickhandler=()=>{
         auth.login(user)
         navigate('/',{replace:true})
    }
     return (
        <div>
            <label >
                usename:<input type="text" 
                value={user}
                onChange={e=>setUser(e.target.value)}/>
            </label>
            <button onClick={clickhandler}>Login</button>
        </div>
     )
}
export default Login