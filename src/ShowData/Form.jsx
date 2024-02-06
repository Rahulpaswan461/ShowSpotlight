import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {image} from './image/landing.jpg'

function Form(){
    const {id}=useParams()
    const [showData,setShowData]=useState({})

    useEffect(()=>{
        axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(res=>setShowData(res.data))
        .catch(error=>console.log("Something went wrong"))
    },[])
     return(
         <div className="movie__booking">
               <h3>{showData && showData.name && showData.name}</h3>
                <img src={image} alt="rhu;" />
                 <div className="form__data">
                      <form action="">
                        <div>
                            <input type='text' placeholder="Enter Your Name"/>
                        </div>
                        <div>
                            <input type='email' placeholder="Enter Your Email"/>
                        </div>
                        <div>
                            <input type='number' placeholder="Enter Your Digits"/>
                        </div>
                        <div>
                            <input type='text' placeholder="Enter Your Name"/>
                        </div>

                      </form>
                 </div>
         </div>
     )
}
export default Form