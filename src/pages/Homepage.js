import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import apiStatusReducer from "../redux/reducers/apiStatusReducer";
import List from "../Components/commons/List";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from './movieProfile/movieProfile';
import Spinner from "../Components/commons/spinner/Spinner";
import SlickSlider from "../Components/slick-slider/slick-slider";
import {PROXY, API_KEY,BASE_URL} from "../utils";
import "./App.scss"
import * as homePageAction from "../redux/actions/homePageActions";
import {useSelector} from "react-redux";


function HomePage({
    loadPopularMovies,
    loadTrendingMovies,
    popularMovies,
    trendingMovies,
    results,
    ...props
    }) {

    useEffect( ()=>{

         loadPopularMovies().catch(error => {
            alert("loading popular" + error)

        })

        loadTrendingMovies().catch(error => {
            alert("loading popular" + error)
        })

    },[loadPopularMovies, loadTrendingMovies])


    const [movies]=useState({...popularMovies})

    console.log(movies)





   const popular = useSelector(state => state.homePageReducer.popularMovies)
    console.log(popular)

    return(
        <div>
          {/*  <List
                movieList={popularMovies}
                viewMovieInfo={viewMovieInfo}
            />*/}



          {/*  {currentMovie === null
                    ?
                    <>
                        <SlickSlider/>
                        <h1>Browse all popular movies</h1>
                        <List
                            movieList={popularMovies}
                            viewMovieInfo={viewMovieInfo}
                        />
                        <Pagination
                            pagesLink={pagesLink}
                            pages={totalPages}
                            currentpages={currentPage}
                            nextPage={nextPage}
                            currentPage={currentPage}
                        />
                    </>
                    :
                    <MovieProfile
                        viewMovieInfo={viewMovieInfo}
                        genre={movieGenres}
                        currentMovie={currentMovie}
                        closeMovieInfo={closeMovieInfo}/>
            }*/}

        </div>
    )

}

HomePage.prototypes ={
    loadPopularMovies: PropTypes.func.isRequired,
    loadTrendingMovies: PropTypes.func.isRequired,
    popularMovies: PropTypes.array.isRequired,
    trendingMovies: PropTypes.object.isRequired,
    apiStatusReducer:PropTypes.number.isRequired
}
function mapStateToProps(state, ownProps) {
    return{
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies,

    };
}

const mapDispatchToProps={
   loadPopularMovies: homePageAction.loadPopularMovies,
   loadTrendingMovies: homePageAction.loadTrendingMovies,
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);




