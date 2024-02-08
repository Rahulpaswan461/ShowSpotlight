import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

function Search(){
    const [movieData,setMovieData]=useState([])
    
    useEffect(()=>{
       axios.get('https://api.tvmaze.com/search/shows?q=all')
       .then(res=>setMovieData(res.data))
       .catch(error=>console.log("the error is occured"))
    },[])
     return(
        <div className="movie__list">
        <h1>Popular</h1>
        <div className="list__cards">
           {
             movieData.map(movie=>{
               return  <Card movie={movie} key={movie.show.id} />
             })
           }
        </div>
   </div>
     )  
}
export default Search