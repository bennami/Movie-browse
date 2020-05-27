import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import List from "../Components/commons/List";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from './movieProfile/movieProfile';
import Spinner from "../Components/commons/spinner/Spinner";
import SlickSlider from "../Components/slick-slider/slick-slider";
import * as homePageAction from "../redux/actions/homePageActions";
import "./App.scss"

function HomePage({
    loadPopularMovies,
    loadTrendingMovies,
    setMovie,
    popularMovies,
    trendingMovies,
    currentMovie,
    results,
    ...props
    }) {


    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (popularMovies === undefined) {
            loadPopularMovies()
                .catch(error => {
                    alert("loading popular" + error)
                })
        }
        if (trendingMovies === undefined) {
            loadTrendingMovies()
                .catch(error => {
                    alert("loading trending movies" + error)
                })
        }
       if(currentMovie === undefined){
         setMovie(null)
       }
    }, [setMovie,currentMovie,trendingMovies, popularMovies, loadTrendingMovies, loadPopularMovies])

    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const viewMovieInfo = (id) => {
        const filteredMovie = popularMovies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setMovie(newCurrentMovie);

    };

    const closeMovieInfo = () => {
       currentMovie  =  null
    };


    return (
        <>
            {
                currentMovie.length  <= 0
                    ?
                    popularMovies === undefined  || trendingMovies === undefined
                        ?
                        <Spinner/>
                        :
                        <>
                            <SlickSlider
                            trendingMovies={trendingMovies}/>
                            <List
                                movieList={popularMovies}
                                viewMovieInfo={viewMovieInfo}
                            />
                        </>
                    :
                    <MovieProfile
                        viewMovieInfo={viewMovieInfo}
                        genre={"movieGenres"}
                        currentMovie={currentMovie}
                        closeMovieInfo={closeMovieInfo}/>

            }
        </>
    )
}

HomePage.prototypes = {
    loadPopularMovies: PropTypes.func.isRequired,
    loadTrendingMovies: PropTypes.func.isRequired,
    setMovie:  PropTypes.func.isRequired,
    popularMovies: PropTypes.array.isRequired,
    trendingMovies: PropTypes.object.isRequired,
    apiStatusReducer: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    currentMovie:  PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        trendingMovies: state.homePageReducer.trendingMovies,
        popularMovies: state.homePageReducer.popularMovies,
        currentMovie: state.homePageReducer.currentMovie,
        loading: state.apiCallsInProgress > 0

    };
}

const mapDispatchToProps = {
    loadPopularMovies: homePageAction.loadPopularMovies,
    loadTrendingMovies: homePageAction.loadTrendingMovies,
    setMovie:  homePageAction.setMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




