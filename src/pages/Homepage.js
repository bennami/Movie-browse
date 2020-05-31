import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import List from "../Components/commons/List";
import MovieProfile from './movieProfile/movieProfile';
import SlickSlider from "../Components/slick-slider/slick-slider";
import * as homePageAction from "../redux/actions/homePageActions";
import "./App.scss"
import Spinner from "../Components/commons/spinner/Spinner";

function HomePage({
    loadPopularMovies,
    loadTrendingMovies,
    setMovie,
    popularMovies,
    trendingMovies,
    currentMovie,
    }) {

    useEffect(() => {
        if (popularMovies === undefined ||popularMovies.length === 0) {
            loadPopularMovies()
                .catch(error => {
                    alert("loading popular" + error)
                })
        }
        if (trendingMovies === undefined || trendingMovies.length ===0) {
            loadTrendingMovies()
                .catch(error => {
                    alert("loading trending movies" + error)
                })
        }

    }, [trendingMovies, popularMovies, loadTrendingMovies, loadPopularMovies]);

    const viewMovieInfo = (id) => {
        const filteredMovie = popularMovies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setMovie(newCurrentMovie);

    };


    return (
        <>
            {
                currentMovie.length <= 0
                    ?
                    popularMovies === undefined  || trendingMovies === undefined
                        ?
                        <Spinner/>
                        :
                        <>
                            <SlickSlider
                            popularMovies={popularMovies}/>
                            <h1 id="popularSection">Popular movies</h1>
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
                        closeMovieInfo={() => {setMovie([])}}/>
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




