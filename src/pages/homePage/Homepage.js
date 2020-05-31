import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {useHistory, useParams} from "react-router-dom";
import * as homePageAction from "../../redux/actions/homePageActions";
import List from "../../Components/commons/List";
import MovieProfile from '../movieProfile/movieProfile';
import SlickSlider from "../../Components/slick-slider/slick-slider";
import "../App.scss"
import Spinner from "../../Components/commons/spinner/Spinner";
import Pagination from "../../Components/commons/pagination/Pagination";

function HomePage({
    loadPopularMovies,
    loadTrendingMovies,
    loadGenres,
    genres,
    setMovie,
    popularMovies,
    trendingMovies,
    currentMovie,
    currentPage,
    setCurrentPage
    }) {
const history = useHistory();
    useEffect(() => {
        if (popularMovies === undefined ||popularMovies.length === 0) {
            loadPopularMovies(currentPage)
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

        if(genres === undefined){
            loadGenres()
                .catch(error => {
                    alert("loading trending movies" + error)
                })
        }

    }, [genres,loadGenres,trendingMovies, popularMovies, loadTrendingMovies, loadPopularMovies,currentPage]);

    const viewMovieInfo = (id) => {
            const filteredMovie = popularMovies.filter(movie => movie.id === id);
            const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
            if(currentMovie.length  === 0){
                setMovie(newCurrentMovie);
                //history.push(`/home/${currentMovie.title}`);
            }


    };

 /*   function nextPage() {
    loadPopularMovies(currentPage)
    }*/

    function clickedNumber(current){
        console.log(current);
        setCurrentPage(current);
        loadPopularMovies(currentPage);
    }
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
                            <Pagination/>
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
    loadGenres: PropTypes.func.isRequired,
    setMovie:  PropTypes.func.isRequired,
    popularMovies: PropTypes.array.isRequired,
    trendingMovies: PropTypes.object.isRequired,
    apiStatusReducer: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    currentMovie:  PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
    return {
        trendingMovies: state.homePageReducer.trendingMovies,
        popularMovies: state.homePageReducer.popularMovies,
        currentMovie: state.homePageReducer.currentMovie,
        currentPage: state.homePageReducer.currentPage,
        loading: state.apiCallsInProgress > 0

    };
}

const mapDispatchToProps = {
    loadPopularMovies: homePageAction.loadPopularMovies,
    loadTrendingMovies: homePageAction.loadTrendingMovies,
    loadGenres: homePageAction.loadGenres,
    setMovie:  homePageAction.setMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




