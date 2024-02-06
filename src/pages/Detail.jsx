import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(){
    const {id}=useParams()
    return (
       <div>
          <img src="" alt="" />
          Rahul paswan {id}
       </div>
    )
}
export default Detail