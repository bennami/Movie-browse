import React from "react";
import Card from "./Card.js"


function List(props) {
  
        return(

            <div  className={'card'}>
                    {
                        props.movieList.map((movie, i) =>{
                            return <Card
                                key={movie.id}
                                image={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                                title={movie.original_title}
                                description={movie.overview}
                            />
                        })
                    }
            </div>
        )
}

export default List;