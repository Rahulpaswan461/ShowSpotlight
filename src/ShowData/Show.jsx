import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Show.css'

function Show(){
    const [movieDetail,setMoviDetail]=useState([])

    useEffect(()=>{
       axios.get('https://api.tvmaze.com/search/shows?q=all')
       .then(res=>setMoviDetail(res.data))
       .catch(error=>console.log("The error is occured"))
    },[])
      return (
          <div className="movie__list">
               <h1>Popular</h1>
               <div className="list__cards">
                  {
                    movieDetail.map(movie=>{
                      return  <Card movie={movie} key={movie.show.id} />
                    })
                  }
               </div>
          </div>
      ) 
}
export default Show