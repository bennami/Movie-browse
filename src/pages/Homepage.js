import React, {useEffect, useState} from "react";
import List from "../Components/commons/List";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from './movieProfile/movieProfile';
import SlickSlider from "../Components/slick-slider/slick-slider";
import {PROXY, API_KEY,BASE_URL} from "../utils";
import "./App.scss"

function HomePage() {
    const [TrendingTodayMovies, setTrending] = useState([]);
    const [popularMovies, setPopular] = useState([]);
    const [totalResults, setTotalResults] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movieGenres, setMovieGenres] = useState([]);


    //on load, fetch trending, popular and movieGenres
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${PROXY}${BASE_URL}/trending/all/day${API_KEY}`);
            const trending = await response.json();
            setTrending(trending.results);
        }
        fetchData();

        async function fetchMovieGenres() {
            const response = await fetch (`${PROXY}${BASE_URL}/genre/movie/list${API_KEY}&language=en-US`);
            const genres = await response.json();
            setMovieGenres(genres);
        }
        fetchMovieGenres();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${PROXY}${BASE_URL}/movie/popular${API_KEY}&language=en-US&page=${currentPage}`);
            const popular = await response.json();
            setPopular(popular.results);
            setTotalPages(popular.total_pages);
            setTotalResults(popular.total_results);
        }
        fetchData();
    }, [currentPage]);


    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const viewMovieInfo = (id) =>{
        const filteredMovie = popularMovies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0]: null;
        setCurrentMovie(newCurrentMovie);

    };

   const  closeMovieInfo = () => {
        setCurrentMovie( null);
    };

    return(
        <div>
            {currentMovie === null
             ?
            <>
                {/*<SlickSlider/>*/}
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
            }
        </div>
    )

}
export default HomePage;




