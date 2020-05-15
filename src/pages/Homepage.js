import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
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

    //console.log(props)
    const history= useHistory();
    const [movies, setMovies]=useState({...popularMovies})

    useEffect( ()=>{

         loadPopularMovies().catch(error => {
            alert("loading popular" + error)

        })



        loadTrendingMovies().catch(error => {
            alert("loading popular" + error)
        })

    },[loadPopularMovies,props.actions])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [currentMovie, setCurrentMovie] = useState(null);





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
    searchInput:PropTypes.string.isRequired,
    results:PropTypes.array.isRequired,
    apiStatusReducer:PropTypes.number.isRequired
}
function mapStateToProps(state, ownProps) {
    return{
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies,
        searchInput: state.searchInput,
        searchResults: state.searchResults
    };
}

const mapDispatchToProps={
   loadPopularMovies: homePageAction.loadPopularMovies,
   loadTrendingMovies: homePageAction.loadTrendingMovies,
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);




