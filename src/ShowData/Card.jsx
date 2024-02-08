import React, { useEffect, useState } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

function Card({ movie }) {
   
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
       setTimeout(()=>{
         setIsLoading(false)
       },1500)
    },[])
  return (
      

     <Link to={`/movie/${movie && movie.show && movie.show.id && movie.show.id}`}>
        <div className="cards">
        {movie && movie.show && movie.show.image && (
            <img src={movie.show.image.medium} alt="" />
        )}
        <div className="card__overlay">
            <div className="card__title">
            {movie && movie.show && movie.show.name && movie.show.name}
            </div>
            <div className="card__score">{movie && movie.show.rating && movie.show.rating.average}</div>
            <div className="card__description">
            {movie && movie.show && movie.show.name + movie.show.summary.replace(/<[^>]*>/g, '').slice(0,118)+" "}
            </div>
        </div>
        </div>
     </Link>
  );
}

export default Card;
