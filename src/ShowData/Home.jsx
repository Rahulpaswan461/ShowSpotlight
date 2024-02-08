import React, { useEffect, useState } from 'react'
import Show from './Show'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Home.css'

function Home(){
    const [movieData,setMovieData]=useState([])

    useEffect(()=>{
       axios.get('https://api.tvmaze.com/search/shows?q=all')
       .then(res=>setMovieData(res.data))
       .catch(error=>console.log("Error occured"))
    },[])

     return(
      <div className="poster">
           <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
            {/* Map over movieData and return a Link component for each movie */}
            {movieData && movieData.map(movie => (
                <Link
                to={`/movie/${movie.show.id}`}
                style={{ textDecoration: "none", color: "white" }}
                key={movie && movie.show && movie.show.id}
                >
                <div className="poster__image">
                    <img
                    src={movie && movie.show && movie.show.image && movie.show.image.original}
                    alt=""
                    style={{ width: "100%",height:"90%",objectFit:"cover"}}
                    />
                </div>
                 <div className="poster__overlay">
                       <div className="movie__title">
                          {movie && movie.show && movie.show.name && movie.show.name}
                       </div>
                       <div className="movie__runtime">
                       <i className="fa-solid fa-star"></i>{movie && movie.show && movie.show.rating && movie.show.rating.average}
                       </div>
                       <div className="movie__description">
                           {movie && movie.show && movie.show.summary &&
                           movie.show.summary.replace(/<[^>]*>/g, '').slice(0,500)+" "}
                       </div>
                 </div>
                </Link>
            ))}
            </Carousel>

        <Show/>
      </div>
     )
}
export default Home