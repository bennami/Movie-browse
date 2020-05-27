import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import apiStatusReducer from "../redux/reducers/apiStatusReducer";
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
                      popularMovies,
                      trendingMovies,
                      results,
                      ...props
                  }) {

    const [currentMovie, setCurrentMovie] = useState(null);
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
    }, [trendingMovies, popularMovies, loadTrendingMovies, loadPopularMovies])

    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const viewMovieInfo = (id) => {
        const filteredMovie = popularMovies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setCurrentMovie(newCurrentMovie);

    };

    const closeMovieInfo = () => {
        setCurrentMovie(null);
    };


    return (
        <>
            {
                currentMovie === null
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
    popularMovies: PropTypes.array.isRequired,
    trendingMovies: PropTypes.object.isRequired,
    apiStatusReducer: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        trendingMovies: state.homePageReducer.trendingMovies,
        popularMovies: state.homePageReducer.popularMovies,
        loading: state.apiCallsInProgress > 0

    };
}

const mapDispatchToProps = {
    loadPopularMovies: homePageAction.loadPopularMovies,
    loadTrendingMovies: homePageAction.loadTrendingMovies,
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




