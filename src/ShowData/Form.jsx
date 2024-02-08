import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Form.css'


function Form(){
    const {id}=useParams()
    const [showData,setShowData]=useState({})

    useEffect(()=>{
        axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(res=>setShowData(res.data))
        .catch(error=>console.log("Something went wrong"))
    },[])
    const clickhandler=()=>{
         alert("The Data Receive successfully ! ")
    }
     return(
         <div className="movie__booking">
               <h3>{showData && showData.name && showData.name}</h3>
                 <div className="form__data">
                      <form action="">
                        <div>
                            <input type='text' placeholder="Enter Your Name"/>
                        </div>
                        <div>
                            <input type='email' placeholder="Enter Your Email"/>
                        </div>
                        <div>
                            <input type='phone' placeholder="Enter Your Digits"/>
                        </div>
                        <div>
                            <input type='text' placeholder="Enter Your Name"/>
                        </div>
                        <div className="submit__data">
                            <button onClick={clickhandler}>Submit</button>
                        </div>
                      </form>
                 </div>
         </div>
     )
}
export default Form