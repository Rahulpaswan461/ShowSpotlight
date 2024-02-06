import React, { useEffect, useState } from 'react'
import axios from 'axios'
function MovieData(){
    const [post,setPost]=useState([])

    useEffect(()=>{
       axios.get('https://api.tvmaze.com/search/shows?q=all')
       .then(res=>setPost(res.data))
       .catch(error=>console.log("Error is occured"))
    },[])
     return(
         <div>
            {
                post.map(item=>{
                    return <h3 key={item.show.id}>{item.show.name} and the score is {item.score}  and the {item.show.url}</h3>
                })
            }
         </div>
     )
}
export default MovieData