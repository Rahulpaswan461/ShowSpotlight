import React from 'react'
import { useAuth } from './Auth'

function Profile(){
    const auth=useAuth()
     return (
        <div>
            Welcome {auth.user}
        </div>
     )
}
export default Profile