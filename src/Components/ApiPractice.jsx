import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

function ApiPractice(){
    const [post,setPost]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res=>{setPost(res.data)
         setLoading(!loading)
      })
       .catch(error=>console.log("error"))
    },[])
      return(
        <div class="api-demo">
           <div className="heading">
              <h1>The heading seciton</h1>
           </div>
           <div>
            {loading ? "Loading....." : post.map((item)=>{
                 return <Card title={item.title} />
              })}
           {/* {
              post.map((item)=>{
                 return <Card title={item.title} />
              })
           } */}
           </div>
        </div>
      )  
}
export default ApiPractice