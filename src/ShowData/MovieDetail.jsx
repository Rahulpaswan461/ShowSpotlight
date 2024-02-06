import React, { useEffect, useState } from 'react'
import './MovieDetail.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function MovieDetail(){
    const {id}=useParams()
    const [movie,setMovie]=useState({})
    console.log(movie.url)
    useEffect(()=>{
         axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
         .then(res=>{setMovie(res.data)})
         .catch(error=>console.log("error"))
    },[])
     return(
        <>
        <div className="movie">
            <div className="poster_image">
                <img src={movie && movie.image && movie.image.original && movie.image.original} alt=""  />
                </div>
                <div className="Movie__Detail">
                    <div className="left-section">
                         <img src={movie && movie.url && movie.url} alt="" />
                    </div>
                <div className="right-section">
                    <div className="movie__title">
                         <h3>{movie.name && movie.name}</h3>
                       </div>
                <div className="movie__runtime">
                        <span><i className="fa-solid fa-star"></i>{movie.rating&& movie.rating.average  && movie.rating.average}</span>
                    </div>
                      <div className="movie__generes">
                         {movie.genres && movie.genres.map((item,index)=>{return <li key={index}>{item}</li>})}
                      </div>
                    <div className="movie__Description">
                        <p>{movie.summary && movie.summary.replace(/<[^>]*>/g, '')} </p>
                    </div>
                </div>
             </div>
        </div>
        <div className="Useful__links">
                <p>UseFul Link : </p>
                <div className="links">
                    <a href={movie && movie.officialSite && movie.officialSite}>Click Here</a>
                </div>
             </div>
             <div className="container">
                <Link to={`/show/${movie && movie.id && movie.id}`}><a>Book Ticket</a></Link>
             </div>
        </>
     )
}
export default MovieDetail