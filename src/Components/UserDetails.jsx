import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails(){
    const {userId}=useParams()
    return(
       <div>
         <h1>Hello USer {userId}</h1>
       </div>
    )
}
export default UserDetails