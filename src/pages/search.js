import React, {useEffect, useState} from "react";
import List from "../Components/commons/List";
import {useParams} from "react-router-dom";
import {API_KEY, PROXY} from "../utils";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from "./movieProfile/movieProfile";
import Spinner from "../Components/commons/Spinner";

function Search() {

    const [movieList, setMovieList] = useState([]);
    const [search, setSearch] = useState('');
    const {name} = useParams();
    const [totalResults, setTotalResults] = useState();
    const [movieGenres, setMovieGenres] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            //fetch stream of data
            const response1 = await fetch(`${PROXY}https://api.themoviedb.org/3/search/movie/${API_KEY}&query=${name}&page=${currentPage}`);
            //convert to json
            const data = await response1.json();
            //set json object into moviesList array, every time there is a new search this will refresh itself
            setMovieList(data.results);
            setSearch(name);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results);
        }

        fetchData();
    }, [name, currentPage]);


    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };


    const viewMovieInfo = (id) => {
        const filteredMovie = movieList.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setCurrentMovie(newCurrentMovie);
    };

    const closeMovieInfo = () => {
        setCurrentMovie(null);
    };


    return (

        <div>
            {currentMovie === null
                ?
                movieList.length === 0
                    ?
                    <Spinner/>
                    :
                    <>
                        <h3>Results for: {search}</h3>
                        <List movieList={movieList} viewMovieInfo={viewMovieInfo}/>
                        <div className={"pagination-with-btn"}>
                            <Pagination pagesLink={pagesLink} pages={totalPages} currentpages={currentPage}
                                        nextPage={nextPage} currentPage={currentPage}/>
                        </div>
                    </>
                :
                <MovieProfile
                    viewMovieInfo={viewMovieInfo}
                    genre={movieGenres}
                    currentMovie={currentMovie}
                    closeMovieInfo={closeMovieInfo}
                />

            }
        </div>
    )

}

export default Search;
