import React from "react";
import Card from "../card/Card.js"
import {IMG_BASE_200} from "../../../utils";

const List =({movieList,viewMovieInfo}) =>(
    <div  className={'list'}>
       {
         movieList.map((movie, i) =>{
             return <Card
                        key={i}
                        img={`${IMG_BASE_200}${movie.poster_path}`}
                        title={movie.original_title}
                        description={movie.overview}
                        viewMovieInfo={viewMovieInfo}
                        movieId={movie.id}
                    />
             })
       }
    </div>
)
export default List;
