import React from "react";
import Card from "./Card.js"

function List(props) {

     return(

         <div  className={'list'}>
               {
                  props.movieList.map((movie, i) =>{
                            
                     return <Card
                                key={i}
                                img={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                title={movie.original_title}
                                description={movie.overview}
                            />

                  })
               }
         </div>
     )
}

export default List;