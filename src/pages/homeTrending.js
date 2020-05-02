import React, {useEffect, useState} from "react";
import List from "../Components/List";
import TrendingScroll from "../Components/trendingScroll";
import Pagination from "../Components/Pagination";
import apiCalls from "../Components/getMovieProfile";
import MovieProfile from './movieProfile';
import '../assets/css/slider.scss'
import Landing from "../Components/landingPage";
import Carousel from "../Components/carousel";

function Popular() {

    const [TrendingTodayMovies, setTrending] = useState([]);
    const [popularMovies, setPopular] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const [totalResults, setTotalResults] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink, setPagesLink] =useState(0);
    const [currentMovie, setCurrentMovie] = useState(null);

    //on load, load List with popular movies
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/trending/all/day?api_key=67b347978ffe14fc5d6f8a664a1829f2`);
            const trending = await response.json();
            setTrending(trending.results);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/movie/popular?api_key=67b347978ffe14fc5d6f8a664a1829f2&language=en-US&page=${currentPage}`);
            const popular = await response.json();
            setPopular(popular.results);
            setTotalPages(popular.total_pages);
            setTotalResults(popular.total_results);
        }
        fetchData();
    }, [currentPage]);
    console.log(TrendingTodayMovies);

    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const viewMovieInfo = (id) =>{
            const filteredMovie = popularMovies.filter(movie => movie.id == id);
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
            {/*{
               TrendingTodayMovies.map((movie, i) => {

                        return <div className="carousel-item">
                            <img className={"d-block w-100 "} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={'hey'} key={i}/>
                        </div>
               })
            }*/}
            <Carousel movie={TrendingTodayMovies}/>
        {/*    <Landing movieList={TrendingTodayMovies}/>*/}
            <TrendingScroll movieList={TrendingTodayMovies}/>
            <h1>Browse all popular movies</h1>
            <List movieList={popularMovies} viewMovieInfo={viewMovieInfo}/>
            {totalResults > 20 ? <Pagination pagesLink={pagesLink} pages={totalPages} currentpages={currentPage}  nextPage={nextPage} currentPage={currentPage}/> : ""}
            </>
            :
                <MovieProfile viewMovieInfo={viewMovieInfo}  currentMovie={currentMovie} closeMovieInfo={closeMovieInfo}/>
            }
        </div>
    )

}

export default Popular;
