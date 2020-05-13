import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types"
import List from "../Components/commons/List";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from './movieProfile/movieProfile';
import Spinner from "../Components/commons/spinner/Spinner";
import SlickSlider from "../Components/slick-slider/slick-slider";
import {PROXY, API_KEY,BASE_URL} from "../utils";
import "./App.scss"
import * as homePageAction from "../redux/actions/homePageActions";
import {bindActionCreators} from "redux";

function HomePage({
    loadPopularMovies,
    loadTrendingMovies,
    popularMovies,
    trendingMovies,
    results,
    ...props
    }) {

    const history= useHistory();

    useEffect( ()=>{

        props.actions.loadPopularMovies().catch(error => {
            alert("loading popular" + error)

        })

        props.actions.loadTrendingMovies().catch(error => {
            alert("loading popular" + error)
        })

    },[])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [currentMovie, setCurrentMovie] = useState(null);
console.log(popularMovies);
/*    //loads courses and authors on load
    useEffect( ()=>{
        if (trendingMovies.length === 0) {
            loadTrendingMovies().catch(error => {
                alert("Loading trending" + error);
            });
            loadPopularMovies().catch(error => {
                alert("loading popular"+error)
            });
        }else {
            setTrendingMovies( trendingMovies );
            setPopularMovies(popularMovies);
        }
        console.log(trendingMovies)
        console.log(popularMovies)
    },[trendingMovies,popularMovies]);*/

   /* //on load, fetch trending, popular and movieGenres
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${PROXY}${BASE_URL}/trending/all/day${API_KEY}`);
            const trending = await response.json();
            setTrendingMovies(trending.results);
        }
        fetchData();

        async function fetchMovieGenres() {
            const response = await fetch (`${PROXY}${BASE_URL}/genre/movie/list${API_KEY}&language=en-US`);
            const genres = await response.json();
            setMovieGenres(genres);
        }
        fetchMovieGenres();
    }, []);*/

  /* useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${PROXY}${BASE_URL}/movie/popular${API_KEY}&language=en-US&page=${currentPage}`);
            const popular = await response.json();
            setPopular(popular.results);
            setTotalPages(popular.total_pages);
            setTotalResults(popular.total_results);
        }
        fetchData();
    }, [currentPage]);*/


    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const viewMovieInfo = (id) =>{
        const filteredMovie = props.popularMovies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0]: null;
        setCurrentMovie(currentMovie);
        history.push(`/movieProfile/${newCurrentMovie}`);

    };

   const  closeMovieInfo = () => {
        setCurrentMovie( null);
    };

    return(
        <div>

            {

                props.popularMovies.map(movie =>(<div key={movie.id}> <p>{movie.title}</p></div>))
            }


          {/* <List
                movieList={props.popularMovies.results}
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
    trendingMovies: PropTypes.array.isRequired,
    searchInput:PropTypes.string.isRequired,
    results:PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
}
function mapStateToProps(state, ownProps) {
    return{
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies,
        searchInput: state.searchInput,
        searchResults: state.searchResults
    };
}

function mapDispatchToProps(dispatch) {
return{
   actions: bindActionCreators(homePageAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);




