import React from "react";
import Card from "./Card.js"
import {IMG_BASE_200} from "../../utils";
import { connect } from "react-redux";

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
function mapStateToProps(state) {
    return{
        popularMovies: state.popularMovies,
        trendingMovies: state.trendingMovies
    };
}

export default connect(mapStateToProps)(List);