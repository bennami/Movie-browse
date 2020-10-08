import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as homePageAction from "../../redux/actions/homePageActions";
import List from "../../Components/commons/listOfMovies/List";
import MovieProfile from '../movieProfile/movieProfile';
import SlickSlider from "../../Components/commons/slick-slider/slick-slider";
import "./homepage.scss"
import Spinner from "../../Components/commons/spinner/Spinner";
import ReactPaginate from 'react-paginate';

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
    setCurrentPage,
    totalPages
    }) {

    useEffect(()=>{
        if(genres === undefined || genres.length === 0){
            loadGenres()
                .catch(error => {
                    alert("loading trending movies" + error)
                })
        }
    },[loadGenres,genres,currentPage])
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



    }, [trendingMovies, popularMovies, loadTrendingMovies, loadPopularMovies,currentPage]);

    const viewMovieInfo = (id) => {
            const filteredMovie = popularMovies.filter(movie => movie.id === id);
            const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
            if(currentMovie.length  === 0){
                setMovie(newCurrentMovie);
                //history.push(`/home/${currentMovie.title}`);
            }


    };

    function clickedNumber(current){
        console.log(currentPage)
        console.log( current.selected+1)
        current = current.selected+1
        if(current !== currentPage){
            setCurrentPage(current);

            loadPopularMovies(currentPage);
        }
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
                            <ReactPaginate
                                pageCount={totalPages}
                                pageRangeDisplayed={4}
                                marginPagesDisplayed={0}
                                onPageChange={clickedNumber}
                                containerClassName={'container'}
                                breakClassName={"break"}
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
        totalPages: state.homePageReducer.totalPages,
        loading: state.apiCallsInProgress > 0

    };
}

const mapDispatchToProps = {
    loadPopularMovies: homePageAction.loadPopularMovies,
    loadTrendingMovies: homePageAction.loadTrendingMovies,
    loadGenres: homePageAction.loadGenres,
    setMovie:  homePageAction.setMovie,
    setCurrentPage: homePageAction.setCurrentPage
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




