import React from 'react'
import './MyCard.css'

function MyCard(){
      return (
         <div className="cards">
           <img src="https://images.unsplash.com/photo-1706550634123-ad2aa217ede8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D" alt="" />
            <div className="card__overlay">
                <div className="card__title">The Era</div>
                <div className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae cum facere repudiandae beatae iusto. Quibusdam soluta nemo illum facere?
                </div>
            </div>
         </div>
      )

}
export default MyCard